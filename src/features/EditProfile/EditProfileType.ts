import { z } from "zod";

export const EditProfileSchema = z.object({
  name: z.string().nonempty("name is required"),
  username: z
    .string()
    .nonempty("username is required")
    .regex(/^@/)
    .max(15, { message: "max 15 character" }),
  bio: z.string().max(50, { message: "max 50 character" }),
  profile: z.instanceof(File).optional(),
  backgound: z.instanceof(File).optional(),
});

export type EditProfileDTO = z.infer<typeof EditProfileSchema>;

export type EditProfileFormData = FormData;
