import { z } from "zod";

type User = {
  fullname: string;
  email: string;
  password: string;
};

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type RegisterFormDTO = z.infer<typeof registerSchema>;

export const resetSchema = z
  .object({
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPass"],
    message: "Password confirmation does not match",
  });
type ResetFormDTO = z.infer<typeof resetSchema>;

export type { User, RegisterFormDTO, ResetFormDTO };
