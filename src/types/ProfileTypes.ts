import z from "zod";

export const registerProfileSchema = z.object({
  name: z.string().nonempty("name is required"),
  bio: z.string().max(50, "maximum character is 50").optional(),
  image: z.instanceof(File),
});

type RegisterProfileDTO = z.infer<typeof registerProfileSchema>;

type RegisterProfileFormData = FormData;

export type { RegisterProfileDTO, RegisterProfileFormData };
