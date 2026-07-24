import { object, string, z } from "zod";

export const loginDTO = object({
    body: object({
        email: string({
            required_error: "Email is required!",
        }).email("Email is invalid!"),
        password: string({
            required_error: "Password is required",
        }).min(8, "Password too short - should be 8 chars minimium"),
    }),
});

export const forgotPasswordDTO = object({
    body: object({
        email: string({
            required_error: "Email is required!",
        }).email("Email is invalid!"),
    }),
});

export const resetPasswordDTO = object({
    body: object({
        token: string({
            required_error: "Token is required!",
        }),
        password: string({
            required_error: "Password is required",
        }).min(8, "Password too short - should be 8 chars minimium"),
        passwordConfirmation: string({
            required_error: "Password confirmation is required",
        }),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords don't match",
        path: ["passwordConfirmation"],
    }),
});

const userRoleParams = object({
    userId: string(),
});

export const userRoleDTO = object({
    params: userRoleParams,
});

const setUserRoleBody = object({
    userId: string({
        required_error: "A user id is necessary.",
    }),
    newRole: string({
        required_error: "New role is required!",
    }),
    emailMessage: string().optional(),
});

export const setUserRoleDTO = object({
    body: setUserRoleBody,
});

export type LoginDTO = z.infer<typeof loginDTO>;
export type ForgotPasswordDTO = z.infer<typeof forgotPasswordDTO>;
export type ResetPasswordDTO = z.infer<typeof resetPasswordDTO>;
export type UserRoleDTO = z.infer<typeof userRoleDTO>;
export type SetUserRoleDTO = z.infer<typeof setUserRoleDTO>;
