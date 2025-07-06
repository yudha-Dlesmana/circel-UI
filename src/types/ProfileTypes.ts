import z from "zod";
export const EditProfileSchema = z.object({
  name: z.string().nonempty("name is required"),
  username: z
    .string()
    .nonempty("username is required")
    .regex(/^@/)
    .max(15, { message: "max 15 character" }),
  bio: z.string().max(50, { message: "max 50 character" }),
  image: z.instanceof(File).optional(),
  deleteImage: z.boolean().optional(),
});

type EditProfileDTO = z.infer<typeof EditProfileSchema>;

type EditProfileFormData = FormData;

export type { EditProfileDTO, EditProfileFormData };
