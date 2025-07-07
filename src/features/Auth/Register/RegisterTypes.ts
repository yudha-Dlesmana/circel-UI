import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email().nonempty(),
  name: z.string().nonempty(),
  password: z.string().min(6).nonempty(),
});
export type RegisterDTO = z.infer<typeof registerSchema>;

export type RegisterDataRes = { username: string; name: string; token: string };

export type RegisterErrRes = {};
