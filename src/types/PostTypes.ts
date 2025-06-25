import { z } from "zod";

export const PostTweetsSchema = z
  .object({
    text: z.string().nullable(),
    image: z.instanceof(File).optional(),
  })
  .refine(
    (data) => {
      const isEmptyText = !data.text || data.text.trim() === "";
      const hasImage = data.image instanceof File;
      return !isEmptyText || hasImage;
    },
    {
      message: "Image is required when text is empty.",
      path: ["image"],
    }
  );
export type PostTweetsDTO = z.infer<typeof PostTweetsSchema>;
export type PostTweesFormData = FormData;

export type PostDTO = {
  text: string;
  image?: string;
  createAt: Date;
  username: string;
  name: string;
  userImage?: string;
  likes: number;
  comments: number;
}; // ganti jadi tweets
