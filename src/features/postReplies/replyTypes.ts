import { z } from "zod";

export const PostRepliesSchema = z.object({
  text: z.string().nonempty(),
});
export type PostRepliesDTO = z.infer<typeof PostRepliesSchema>;
export type PostRepliesSearchParam = URLSearchParams;
