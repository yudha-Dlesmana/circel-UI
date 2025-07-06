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

export type { User, RegisterFormDTO };
