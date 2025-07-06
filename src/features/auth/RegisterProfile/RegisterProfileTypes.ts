import { z } from "zod";

export const registerProfileSchema = z.object({
  bio: z
    .string()
    .max(50, "Bio must be at most 50 characters")
    .nullable()
    .optional(),
  profile: z.instanceof(File).optional(),
  background: z.instanceof(File).optional(),
});
export type RegisterProfileDTO = z.infer<typeof registerProfileSchema>;

export type RegisterProfileFormData = FormData;

export type RegisterProfileDataRes = {
  userId: string;
  bio: string;
  image: string;
};

export type registerProfileErrRes = {};
