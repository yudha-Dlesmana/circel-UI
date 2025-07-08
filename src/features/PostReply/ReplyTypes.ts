import { z } from "zod";

export const PostReplySchema = z.object({
  text: z.string().nonempty(),
});
export type PostReplyDTO = z.infer<typeof PostReplySchema>;
export type PostReplySearchParam = URLSearchParams;
