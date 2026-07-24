import nodemailer from "nodemailer";
import env from "./validateEnv";
import Email from "email-templates";
import * as path from "path";
import { RolesType, SampleStatus } from "./consts";

const templatesPath = path.join(__dirname, "../storage/emailTemplates");
const emailSecure = env.EMAIL_SECURE === "true";
const useExplicitSmtp = Boolean(env.EMAIL_HOST);

const transportConfig = useExplicitSmtp
    ? {
        host: env.EMAIL_HOST,
        port: env.EMAIL_PORT,
        secure: emailSecure,
        auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASS,
        },
    }
    : {
        service: env.EMAIL_SERVICE,
        auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASS,
        },
    };

const transport = nodemailer.createTransport(transportConfig);

const email = new Email({
    send: true,
    preview: false,
    views: {
        root: templatesPath,
        options: {
            extension: "pug",
        },
    },
    juice: true,
    juiceSettings: {
        tableElements: ["TABLE"],
    },
    message: {
        from: `Superdot Coleta - <${env.EMAIL_USER}>`,
    },
    transport,
});

function logEmailSendSuccess(context: string, result: any) {
    console.info(`[email:${context}] sent`, {
        accepted: result?.accepted,
        rejected: result?.rejected,
        pending: result?.pending,
        response: result?.response,
        messageId: result?.messageId,
        envelope: result?.envelope,
        rawResult: result,
    });
}

function logEmailSendFailure(context: string, error: any) {
    console.error(`[email:${context}] failed`, {
        message: error?.message,
        code: error?.code,
        command: error?.command,
        response: error?.response,
        responseCode: error?.responseCode,
        stack: error?.stack,
    });
}

async function sendTemplatedEmail(
    context: string,
    payload: Parameters<typeof email.send>[0]
) {
    try {
        const safePayload = payload as NonNullable<typeof payload>;
        const emailInstance = email as any;
        const baseMessage = {
            ...emailInstance.config.message,
            ...safePayload.message,
            attachments: safePayload.message?.attachments ?? emailInstance.config.message?.attachments,
        };
        const renderedMessage = await emailInstance.renderAll(
            safePayload.template,
            safePayload.locals ?? {},
            baseMessage
        );
        const result: any = await transport.sendMail(renderedMessage);
        result.originalMessage = renderedMessage;
        logEmailSendSuccess(context, result);
        return result;
    } catch (error) {
        logEmailSendFailure(context, error);
        throw error;
    }
}

export async function verifyEmailTransport() {
    try {
        const result = await transport.verify();
        console.info("[email] transport verified", {
            mode: useExplicitSmtp ? "smtp" : "service",
            service: useExplicitSmtp ? undefined : env.EMAIL_SERVICE,
            host: useExplicitSmtp ? env.EMAIL_HOST : undefined,
            port: useExplicitSmtp ? env.EMAIL_PORT : undefined,
            secure: useExplicitSmtp ? emailSecure : undefined,
            user: env.EMAIL_USER,
            verified: result,
        });
        return true;
    } catch (error) {
        logEmailSendFailure("transport-verify", error);
        return false;
    }
}

interface IEmailReviewRequest {
    researcherName: string;
    researcherEmail: string;
    sampleName: string;
    sampleStatus: SampleStatus;
    qttParticipantsAuthorized?: number;
    reviewerFullName: string;
    reviewerEmail: string;
    reviewDate: string;
    reviewerMessage: string;
}

export const dispatchReviewRequestEmail = (body: IEmailReviewRequest) => {
    sendTemplatedEmail("review-request", {
        template: "reviewRequestSample",
        message: {
            to: body.researcherEmail,
            subject: "A sua solicitação de amostra foi revisada!",
        },
        locals: {
            researcherName: body.researcherName,
            sampleName: body.sampleName,
            sampleStatus: body.sampleStatus,
            qttParticipantsAuthorized: body.qttParticipantsAuthorized,
            reviewerFullName: body.reviewerFullName,
            reviewerEmail: body.reviewerEmail,
            reviewDate: body.reviewDate,
            reviewerMessage: body.reviewerMessage,
            systemURL: env.FRONT_END_URL,
        },
    }).catch(() => undefined);
};

interface IEmailSecondSourceINdication {
    secondSourceName: string;
    secondSourceEmail: string;
    participantName: string;
    participantEmail: string;
    sampleId: string;
    participantId: string;
}

export const dispatchSecondSourceIndicationEmail = (body: IEmailSecondSourceINdication) => {
    sendTemplatedEmail("second-source-indication", {
        template: "secondSourceIndication",
        message: {
            to: body.secondSourceEmail,
            subject: "Você foi indicado como segunda fonte!",
        },
        locals: {
            secondSourceName: body.secondSourceName,
            participantName: body.participantName,
            participantEmail: body.participantEmail,
            systemURL: `${env.FRONT_END_URL}/formulario-adulto-segunda-fonte/${body.sampleId}/${body.participantId}`,
        },
    }).catch(() => undefined);
};

interface IEmailParticipantVerification {
    participantName?: string;
    verificationCode: string;
    participantEmail: string;
    sampleId: string;
    participantId: string;
}

export const dispatchParticipantVerificationEmail = (body: IEmailParticipantVerification) => {
    sendTemplatedEmail("participant-verification", {
        template: "verifyParticipant",
        message: {
            to: body.participantEmail,
            subject: "SuperDot - Seu link de verificação.",
        },
        locals: {
            participantName: body.participantName,
            verificationUrl: `${env.FRONT_END_URL}/formulario-adulto/${body.sampleId}/${body.participantId}/${body.verificationCode}`,
        },
    }).catch(() => undefined);
};

interface IEmailAddParticipantEmail {
    participantName?: string;
    verificationCode: string;
    participantEmail: string;
    sampleId: string;
    participantId: string;
    researcherName: string;
    researcherEmail: string;
}

export const dispatchAddParticipantEmail = (body: IEmailAddParticipantEmail) => {
    sendTemplatedEmail("add-participant", {
        template: "participantIndication",
        message: {
            to: body.participantEmail,
            subject: "SuperDot - Voce foi indicado.",
        },
        locals: {
            participantName: body.participantName,
            researcherName: body.researcherName,
            researcherEmail: body.researcherEmail,
            verificationUrl: `${env.FRONT_END_URL}/formulario-adulto/${body.sampleId}/${body.participantId}/${body.verificationCode}`,
        },
    }).catch(() => undefined);
};

interface IEmailSecondSourceVerification {
    secondSourceName?: string;
    verificationCode: string;
    secondSourceEmail: string;
    sampleId: string;
    participantId: string;
    secondSourceId: string;
}

export const dispatchSecondSourceVerificationEmail = (body: IEmailSecondSourceVerification) => {
    sendTemplatedEmail("second-source-verification", {
        template: "verifySecondSource",
        message: {
            to: body.secondSourceEmail,
            subject: "SuperDot - Seu link de verificação.",
        },
        locals: {
            secondSourceName: body.secondSourceName,
            participantName: body.secondSourceName,
            verificationUrl: `${env.FRONT_END_URL}/formulario-adulto-segunda-fonte/${body.sampleId}/${body.participantId}/${body.secondSourceId}/${body.verificationCode}`,
        },
    }).catch(() => undefined);
};

interface IEmailNewRole {
    researcherName: string;
    researcherEmail: string;
    admName: string;
    newRole: RolesType;
    admEmail: string;
    admMessage?: string;
}

export const dispatchNewRoleEmail = (body: IEmailNewRole) => {
    sendTemplatedEmail("new-role", {
        template: "newProfile",
        message: {
            to: body.researcherEmail,
            subject: "SuperDot - Alteração de perfil.",
        },
        locals: {
            researcherName: body.researcherName,
            admName: body.admName,
            newRole: body.newRole,
            admEmail: body.admEmail,
            admMessage: body.admMessage,
            systemURL: env.FRONT_END_URL,
        },
    }).catch(() => undefined);
};

interface IEmailPasswordReset {
    researcherName: string;
    researcherEmail: string;
    resetToken: string;
}

export const dispatchPasswordResetEmail = (body: IEmailPasswordReset) => {
    sendTemplatedEmail("password-reset", {
        template: "passwordReset",
        message: {
            to: body.researcherEmail,
            subject: "SuperDot - Redefinição de senha.",
        },
        locals: {
            researcherName: body.researcherName,
            resetUrl: `${env.FRONT_END_URL}/reset-password/${body.resetToken}`,
        },
    }).catch(() => undefined);
};

interface IEmailParticipantIndication {
    participantEmail: string;
    participantName: string;
    researcherName: string;
    researcherEmail: string;
    sampleId: string;
}

export const dispatchParticipantIndicationEmail = ({
    participantEmail,
    participantName,
    researcherName,
    researcherEmail,
    sampleId,
}: IEmailParticipantIndication) => {
    sendTemplatedEmail("participant-indication", {
        template: "participantIndication",
        message: {
            to: participantEmail,
            subject: "Você foi convidado para participar de uma pesquisa!",
        },
        locals: {
            participantEmail,
            participantName,
            researcherEmail,
            researcherName,
            formURL: `${env.FRONT_END_URL}/formulario-adulto/${sampleId}`,
        },
    }).catch(() => undefined);
};

interface IEmailNewSampleNotification {
    researcherEmail: string;
    senderName?: string;
    senderEmail?: string;
    sampleName: string;
    submissionDate: string;
    sampleDescription?: string;
    sample?: string;
    sampleStatus?: SampleStatus;
    sampleInstituition?: string;
}

export const dispatchNewSampleNotificationEmail = ({
    researcherEmail,
    senderName,
    senderEmail,
    sampleName,
    sample,
    sampleStatus,
    sampleInstituition,
    submissionDate,
    sampleDescription,
}: IEmailNewSampleNotification) => {
    sendTemplatedEmail("new-sample-notification", {
        template: "newSampleNotification",
        message: {
            to: researcherEmail,
            subject: "Nova amostra disponível para análise",
        },
        locals: {
            senderName,
            senderEmail,
            sample,
            sampleStatus,
            sampleInstituition,
            sampleName,
            submissionDate,
            sampleDescription,
            systemURL: `${env.FRONT_END_URL}/app/review-requests`,
        },
    }).catch(() => undefined);
};

interface IEmailForgotPassword {
    userEmail: string;
    userName: string;
    token: string;
}

export const dispatchForgotPasswordEmail = (body: IEmailForgotPassword) => {
    email
        .send({
            template: "forgotPassword", 
            message: {
                to: body.userEmail,
                subject: "SuperDot - Recuperação de Senha",
            },
            locals: {
                userName: body.userName,
                resetPasswordUrl: `${env.FRONT_END_URL}/resetPassword?token=${body.token}`,
            },
        })
        .then(console.log)
        .catch(console.error);
};
