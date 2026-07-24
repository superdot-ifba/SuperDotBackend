import { Request, Response } from "express";
import { ForgotPasswordDTO, LoginDTO, ResetPasswordDTO, SetUserRoleDTO } from "../dto/auth.dto";
import * as ResearcherService from "../service/researcher.service";
import { hashContent } from "../util/hash";
import IResearcher from "../interface/researcher.interface";
import { ResearcherDTO } from "../dto/researcher.dto";
import { UserRoleDTO } from "../dto/auth.dto";
import { dispatchNewRoleEmail, dispatchPasswordResetEmail } from "../util/emailSender.util";
import { ROLES, RolesType } from "../util/consts";
import { issueResearcherAccessToken, issueResearcherPasswordResetToken, issueResearcherRefreshToken } from "../service/auth.service";
import { verifyJwt } from "../util/jwt";
import { get } from "lodash";

export async function registerHandler(req: Request<{}, {}, ResearcherDTO["body"], {}>, res: Response) {
    try {
        let researcherData: IResearcher = req.body;

        if (req.file) {
            researcherData.personalData.profilePhoto = req.file.filename;
        }

        researcherData.role = ROLES[0]; // Pesquisador

        researcherData.passwordHash = hashContent(req.body.password);

        const researcherCreated = await ResearcherService.createResearcher(researcherData);

        if (!researcherCreated._id) throw new Error("Cannot create researcher object");

        const accessToken = issueResearcherAccessToken({
            researcherId: researcherCreated._id,
            role: researcherCreated.role,
        });

        const refreshToken = issueResearcherRefreshToken({
            researcherId: researcherCreated._id,
        });

        res.status(200).json({ accessToken, refreshToken });
    } catch (e: any) {
        console.log(e);

        const status = e.message.includes("já está cadastrado") ? 409 : 500;
        res.status(status).json({ message: e.message });
    }
}

export async function loginHandler(req: Request<{}, {}, LoginDTO["body"], {}>, res: Response) {
    try {
        const researcher = await ResearcherService.validatePassword(req.body);

        if (!researcher || !researcher._id) {
            return res.status(401).send("Invalid email or password");
        }

        const accessToken = issueResearcherAccessToken({
            researcherId: researcher._id,
            role: researcher.role,
        });

        const refreshToken = issueResearcherRefreshToken({
            researcherId: researcher._id,
        });

        res.status(200).json({ accessToken, refreshToken });
    } catch (e: any) {
        console.log(e);

        // TO DO errors handlers
        res.status(409).send(e.message);
    }
}

export async function forgotPasswordHandler(req: Request<{}, {}, ForgotPasswordDTO["body"], {}>, res: Response) {
    const responseMessage = "Se o e-mail estiver cadastrado, enviaremos instruções para redefinir a senha.";

    try {
        const researcher = await ResearcherService.findResearcher({ email: req.body.email });

        if (researcher._id) {
            const resetToken = issueResearcherPasswordResetToken({ researcherId: researcher._id });

            dispatchPasswordResetEmail({
                researcherName: researcher.personalData.fullName,
                researcherEmail: researcher.email,
                resetToken,
            });
        }
    } catch (e) {
        console.error(e);
    }

    res.status(200).json({ message: responseMessage });
}

export async function resetPasswordHandler(req: Request<{}, {}, ResetPasswordDTO["body"], {}>, res: Response) {
    try {
        const { decoded, expired } = verifyJwt(req.body.token, "ACCESS_TOKEN_PUBLIC_KEY");
        const researcherId = get(decoded, "researcherId");
        const tokenPurpose = get(decoded, "tokenPurpose");

        if (expired) {
            return res.status(401).json({ message: "Token expirado" });
        }

        if (!researcherId || tokenPurpose !== "password-reset") {
            return res.status(401).json({ message: "Token inválido" });
        }

        await ResearcherService.updateResearcher(
            { _id: researcherId },
            { passwordHash: hashContent(req.body.password) }
        );

        res.status(200).json({ message: "Senha atualizada com sucesso." });
    } catch (e) {
        console.error(e);
        res.status(500).send("Unknown error.");
    }
}

export async function userRoleHandler(req: Request<UserRoleDTO["params"], {}, {}, {}>, res: Response) {
    try {
        const { userId } = req.params;
        const role = await ResearcherService.getResearcherRole(userId);

        console.log(role);
        res.status(200).send(role);
    } catch (e) {
        console.error(e);
        res.status(500).send("Unknown error.");
    }
}

export async function setUserRoleHandler(req: Request<{}, {}, SetUserRoleDTO["body"], {}>, res: Response) {
    try {
        const adm = await ResearcherService.findResearcher({ _id: res.locals.researcherId });

        if (!adm) {
            throw new Error("Invalid session!");
        }

        const { userId, emailMessage } = req.body;
        if (!req.body.newRole.match("Pesquisador|Administrador|Revisor")) {
            throw new Error("Invalid role!");
        }
        const newRole = req.body.newRole as RolesType;

        const researcherUpdated = await ResearcherService.updateResearcher({ _id: userId }, { role: newRole });

        dispatchNewRoleEmail({
            admEmail: adm.email,
            admMessage: emailMessage,
            admName: adm.personalData.fullName,
            newRole,
            researcherEmail: researcherUpdated.email,
            researcherName: researcherUpdated.personalData.fullName,
        });

        res.status(200).end();
    } catch (e) {
        console.error(e);
        res.status(500).send("Unknown error.");
    }
}
