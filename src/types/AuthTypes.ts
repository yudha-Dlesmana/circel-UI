import { z } from "zod";

type User = {
  fullname: string;
  email: string;
  password: string;
  login?: boolean;
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  })
type LoginFormDTO = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z.string().min(6)
})
type RegisterFormDTO = z.infer<typeof registerSchema>

export const forgotSchema = z.object({
  email: z.string().email()
})
type ForgotFormDTO = z.infer<typeof forgotSchema>

export const resetSchema = z
  .object({
  newPass: z.string().min(6),
  confirmPass: z.string().min(6)
  })
  .refine((data) => data.newPass === data.confirmPass, {
    path: ["confirmPass"],
    message: "Password confirmation does not match"
  })
type ResetFormDTO = z.infer<typeof resetSchema>

export type { User, LoginFormDTO, RegisterFormDTO, ForgotFormDTO, ResetFormDTO }

