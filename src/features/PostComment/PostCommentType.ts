import { z } from "zod";

export const PostCommentSchema = z
  .object({
    text: z.string().nullable(),
    comment: z.instanceof(File).optional(),
  })
  .refine(
    (data) => {
      const isEmptyText = !data.text || data.text.trim() === "";
      const hasComment = data.comment instanceof File;
      return !isEmptyText || hasComment;
    },
    {
      message: "Image is required when text is empty.",
      path: ["comment"],
    }
  );
export type PostCommentDTO = z.infer<typeof PostCommentSchema>;
export type PostCommentFormData = FormData;
