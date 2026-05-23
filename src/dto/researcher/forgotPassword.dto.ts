import { z } from "zod";

export const forgotPasswordDTO = z.object({
    body: z.object({
        email: z
            .string({ required_error: "O e-mail é obrigatório" })
            .trim()
            .email("Insira um endereço de e-mail válido")
            .toLowerCase(),
    }),
});

export type ForgotPasswordInput = z.infer<typeof forgotPasswordDTO>;