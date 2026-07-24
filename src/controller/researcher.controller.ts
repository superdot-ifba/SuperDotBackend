import { NextFunction, Request, Response } from "express";
import * as ResearcherService from "../service/researcher.service";
import { compareHashes, hashContent } from "../util/hash";
import IResearcher from "../interface/researcher.interface";
import { PaginateResearcherDTO, UpdateResearcherDTO, paginateResearcherParams } from "../dto/researcher.dto";
import { GetResearcherNameBySampleIdDTO } from "../dto/researcher/getResearcherNameBySampleId.dto";
import { GetResearchDataBySampleIdAndParticipantIdDTO } from "../dto/researcher/getResearchDataBySampleIdAndParticipantId.dto";
import { updateResearcherResetToken } from "../service/researcher.service";
import { dispatchForgotPasswordEmail } from "../util/emailSender.util";
import crypto from 'crypto';
import { SamePassword, TokenExpired } from "../error/researcher.error";


export async function updateResearcherHandler(
    req: Request,
    res: Response
) {
    try {
        const researcherId = res.locals.researcherId;

        const fullName = req.body.fullName;
        const currentPassword = req.body.currentPassword;
        const password = req.body.password;
        const passwordConfirmation = req.body.passwordConfirmation;

        let profilePhotoFilename;
        if (req.file) {
            profilePhotoFilename = req.file.filename;
        }


        if (!researcherId) {
            return res.status(401).json({ message: "Invalid session!" });
        }

        const researcher = await ResearcherService.findResearcherWithPassword({ _id: researcherId });

        if (!researcher) {
            return res.status(404).json({ message: "Researcher not found!" });
        }

        const updatedData: Partial<IResearcher> = {};
        let newPasswordHash: string | undefined;

        if (fullName || profilePhotoFilename) {
            updatedData.personalData = { ...researcher.personalData };

            if (fullName !== undefined && fullName !== researcher.personalData.fullName) {
                updatedData.personalData.fullName = fullName.trim();
            }

            if (profilePhotoFilename) {
                updatedData.personalData.profilePhoto = profilePhotoFilename;
            }
        }

        if (password && password.trim() !== "") {

            if (researcher.passwordHash && researcher.passwordHash.startsWith("$2")) {
                if (!currentPassword) {
                    return res.status(400).json({
                        message: "Current password is required to change your password",
                        code: "PASSWORD_REQUIRED"
                    });
                }

                const isValid = await compareHashes(currentPassword, researcher.passwordHash);

                if (!isValid) {
                    return res.status(400).json({
                        message: "Current password is incorrect",
                        code: "PASSWORD_INCORRECT"
                    });
                }
            } else {
                return res.status(400).json({
                    message: "This account has no current password set. Contact support.",
                    code: "NO_PASSWORD_HASH"
                });
            }

            if (password !== passwordConfirmation) {
                return res.status(400).json({
                    message: "Passwords do not match",
                    code: "PASSWORDS_MISMATCH"
                });
            }

            newPasswordHash = await hashContent(password);
            updatedData.passwordHash = newPasswordHash;
        }

        if (Object.keys(updatedData).length === 0 && !password) {
            return res.status(400).json({
                message: "No data to update!",
                code: "NO_DATA"
            });
        }

        const researcherUpdated = await ResearcherService.updateResearcher(
            { _id: researcherId },
            updatedData,
            { new: true }
        );

        const responseData = {
            _id: researcherUpdated._id,
            personalData: researcherUpdated.personalData,
            email: researcherUpdated.email,
            role: researcherUpdated.role,
            instituition: researcherUpdated.instituition,
            researchSamples: researcherUpdated.researchSamples,
            createdAt: researcherUpdated.createdAt,
            updatedAt: researcherUpdated.updatedAt
        };

        res.status(200).json(responseData);
    } catch (e: any) {
        console.error("Update researcher error:", e);
        res.status(500).json({ message: e.message || "Internal server error" });
    }
}

export async function paginateResearchers(
    req: Request<PaginateResearcherDTO["params"], {}, {}, PaginateResearcherDTO["query"]>,
    res: Response
) {
    try {
        const researcherId = res.locals.researcherId;

        if (!researcherId) {
            throw new Error("Invalid session!");
        }

        paginateResearcherParams.parse(req.params);

        const currentPage = Number(req.params.currentPage);
        const itemsPerPage = Number(req.params.itemsPerPage || 10);

        const page = await ResearcherService.paginateResearchers(currentPage, itemsPerPage, req.query, researcherId);

        res.status(200).json(page);
    } catch (e) {
        console.log(e);

        // TO DO errors handlers
        res.status(409).send(e);
    }
}

export async function handlerGetReseacherNameBySampleId(
    req: Request<GetResearcherNameBySampleIdDTO["params"], {}, {}, {}>,
    res: Response
) {
    try {
        const { sampleId } = req.params;

        const researcherName = await ResearcherService.getResearcherNameBySampleId(sampleId);

        res.status(200).json(researcherName);
    } catch (e) {
        console.log(e);

        // TO DO errors handlers
        res.status(409).send(e);
    }
}

export async function handlerGetReseachDataBySampleIdAndParticipantId(
    req: Request<GetResearchDataBySampleIdAndParticipantIdDTO["params"], {}, {}, {}>,
    res: Response
) {
    try {
        const { sampleId, participantId } = req.params;

        const researcherName = await ResearcherService.getResearchDataBySampleIdAndParticipantId({
            sampleId,
            participantId,
        });

        res.status(200).json(researcherName);
    } catch (e) {
        console.log(e);

        // TO DO errors handlers
        res.status(409).send(e);
    }
}

export const researcherBody = async (req: Request<{}, {}, {}, {}>, res: Response) => {
    try {

        const researcherId = res.locals.researcherId;

        if (!researcherId) {
            throw new Error("Invalid session!");
        }

        const researcher = await ResearcherService.findResearcher({ _id: researcherId });
        if (!researcher) {
            throw new Error("Researcher not found!");
        }

        const responseData = {
            _id: researcher._id,
            personalData: researcher.personalData,
            email: researcher.email,
            role: researcher.role,
            instituition: researcher.instituition,
            createdAt: researcher.createdAt,
            updatedAt: researcher.updatedAt,
        };

        res.status(200).json(responseData);

    } catch (e: any) {
        console.error(e);

        res.status(409).send(e.message);
    }
};

export const forgotPasswordController = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                error: 'O e-mail é obrigatório.'
            });
        }

        // TOKEN ORIGINAL (vai no email)
        const resetToken = crypto.randomBytes(20).toString('hex');

        // HASH DO TOKEN (vai no banco)
        const hashedToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");

        const tokenExpires = new Date();
        tokenExpires.setHours(tokenExpires.getHours() + 1);

        try {
            const researcher = await updateResearcherResetToken(
                { email: email.toLowerCase().trim() },
                hashedToken,
                tokenExpires
            );

            dispatchForgotPasswordEmail({
                userEmail: researcher.email,
                userName: researcher.personalData.fullName,
                token: resetToken
            });

        } catch (serviceError: any) {

            if (serviceError.message === "Researcher is not found") {
                console.log(`Tentativa de recuperação com e-mail inexistente: ${email}`);
            } else {
                throw serviceError;
            }
        }

        return res.status(200).json({
            message: 'Se o e-mail estiver cadastrado, um link de recuperação será enviado.'
        });

    } catch (error) {
        console.error('Erro no fluxo de forgot-password:', error);

        return res.status(500).json({
            error: 'Erro interno ao processar a solicitação.'
        });
    }
};

export const resetPasswordHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        const { token, password } = req.body;

        await ResearcherService.resetPasswordWithToken(
            token,
            password
        );

        return res.status(200).json({
            message: "Senha alterada com sucesso! Você já pode fazer login."
        });

    } catch (error: any) {

        console.log(error);

        if (error instanceof TokenExpired) {
            return res.status(401).send(error.message);
        }
        

        if (error instanceof SamePassword) {
            return res.status(409).send(error.message);
        }

        if (error.message === "PASSWORD_HASH_NOT_FOUND") {
            return res.status(409).send(error.message);
        }

        res.status(500).send(error.message);
    }
};