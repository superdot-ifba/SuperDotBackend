import { z } from "zod";

export const resetPasswordDTO = z.object({
    body: z.object({
        token: z.string({
            required_error: "O token de recuperação é obrigatório",
        }),
        password: z
            .string({
                required_error: "A nova senha é obrigatória",
            })
            .min(6, "A senha deve ter no mínimo 6 caracteres"),
    }),
});

export type ResetPasswordDTO = z.infer<typeof resetPasswordDTO>;