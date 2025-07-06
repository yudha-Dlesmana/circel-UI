import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6).nonempty(),
    confirmPassword: z.string().nonempty(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        path: [confirmPassword],
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
      });
    }
  });
export type ResetPasswordDTO = z.infer<typeof resetPasswordSchema>;

export type ResetPasswordDataRes = {};

export type ResetPasswordErrRes = {
  message: string;
};
