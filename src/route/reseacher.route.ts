import express from "express";
import { validateDTO } from "../middleware/validateDTO.middleware";
import * as ResearcherController from "../controller/researcher.controller";
import { paginateResearcherDTO, updateResearcherFormDataDTO } from "../dto/researcher.dto";
import { requireResearcherJWT } from "../middleware/requireResearcherJWT.middleware";
import { requireRole } from "../middleware/requireRole.middleware";
import { getResearcherNameBySampleIdSchema } from "../dto/researcher/getResearcherNameBySampleId.dto";
import { getResearchDataBySampleIdAndParticipantIdSchema } from "../dto/researcher/getResearchDataBySampleIdAndParticipantId.dto";
import { uploaderConfig } from "../util/uploader";
import { processFormData } from "../middleware/formDataProcessor";
import { checkExistingAvatar } from "../middleware/checkExistingAvatar";
import { forgotPasswordDTO } from "../dto/researcher/forgotPassword.dto";
import * as AuthController from "../controller/auth.controller";
import { resetPasswordDTO } from "../dto/researcher/ResetPassword.dto";

const researcherRouter = express.Router();

researcherRouter.put(
    "/update-researcher",
    [validateDTO(updateResearcherFormDataDTO), requireResearcherJWT],
    processFormData,
    checkExistingAvatar,
    uploaderConfig.single("profilePhoto"),
    ResearcherController.updateResearcherHandler
);

researcherRouter.get(
    "/get-researcher",
    //falta validador
    ResearcherController.researcherBody
);

researcherRouter.get(
    "/paginate/:itemsPerPage/page/:currentPage",
    [validateDTO(paginateResearcherDTO), requireRole("Administrador")],
    ResearcherController.paginateResearchers
);

researcherRouter.get(
    "/get-researcher-name-by-sample/:sampleId",
    validateDTO(getResearcherNameBySampleIdSchema),
    ResearcherController.handlerGetReseacherNameBySampleId
);

researcherRouter.get(
    "/get-research-data-by/sample/:sampleId/participant/:participantId",
    validateDTO(getResearchDataBySampleIdAndParticipantIdSchema),
    ResearcherController.handlerGetReseachDataBySampleIdAndParticipantId
);

researcherRouter.post(
    "/forgot-password",
    validateDTO(forgotPasswordDTO),
    ResearcherController.forgotPasswordController
);

researcherRouter.post(
    "/resetPassword",
    validateDTO(resetPasswordDTO), 
    AuthController.resetPasswordHandler 
);
export { researcherRouter };
