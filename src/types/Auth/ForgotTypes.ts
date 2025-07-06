import { z } from "zod";

export const forgotSchema = z.object({
  email: z.string().email().nonempty(),
});
export type ForgotDTO = z.infer<typeof forgotSchema>;

export type ForgotErrData = {
  message: string;
};
