import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(6).nonempty(),
});
export type LoginDTO = z.infer<typeof loginSchema>;

export type loginRes = {
  token: string;
};
