import {z} from "zod"

export const postSchema = z.object({
  image: z.instanceof(File)
          .refine((file) => file.type.startsWith("image/"), {message: "Not image file"})
          .optional().nullable(),
  text: z.string().optional().nullable()
})
.refine(() => {})