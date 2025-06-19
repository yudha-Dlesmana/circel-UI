import z from "zod";

export const ProfileSchema = z.object({
  name: z.string().nonempty("name is required"),
  bio: z.string().max(50, "maximum character is 50"),
  image: z.instanceof(File).optional(),
});

type ProfileDTO = z.infer<typeof ProfileSchema>;

type ProfileFormData = FormData;

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

export type {
  ProfileDTO,
  ProfileFormData,
  EditProfileDTO,
  EditProfileFormData,
};
