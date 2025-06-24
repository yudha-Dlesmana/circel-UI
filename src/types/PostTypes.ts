import { z } from "zod";

export const postSchema = z.object({
  text: z.string().optional().nullable(),
  image: z.instanceof(File).optional(),
});
export type PostFormDTO = z.infer<typeof postSchema>;

export type PostDTO = {
  text: string;
  image?: string;
  createAt: Date;
  username: string;
  name: string;
  userImage?: string;
  likes: number;
  comments: number;
};
