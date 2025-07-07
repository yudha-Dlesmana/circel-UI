import { z } from "zod";

export type TweetsPayload = {
  tweets: [
    {
      id: number;
      text: string;
      image: string;
      createAt: Date;
      username: string;
      name: string;
      userImage: string;
      comments: string;
    }
  ];
  cursor: number;
};

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
