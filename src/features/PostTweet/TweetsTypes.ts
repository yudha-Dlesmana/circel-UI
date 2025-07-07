import { z } from "zod";

export const PostTweetSchema = z
  .object({
    text: z.string().nullable(),
    tweet: z.instanceof(File).optional(),
  })
  .refine(
    (data) => {
      const isEmptyText = !data.text || data.text.trim() === "";
      const hasTweet = data.tweet instanceof File;
      return !isEmptyText || hasTweet;
    },
    {
      message: "Image is required when text is empty.",
      path: ["tweet"],
    }
  );
export type PostTweetDTO = z.infer<typeof PostTweetSchema>;
export type PostTweetFormData = FormData;
