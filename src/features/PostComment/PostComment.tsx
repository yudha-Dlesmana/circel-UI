import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostComment } from "@/features/PostComment/usePostComments";
import { useUser } from "@/features/Profile/User/useUsers";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import TextareaAutosize from "react-textarea-autosize"
import { toast } from "sonner";
import { PostCommentDTO, PostCommentSchema } from "./PostCommentType";

export function PostComment({tweetId}:{tweetId: number}){
  const {AuthUser} = useUser()
  const [preview, setPreview] = useState<string | undefined>(undefined)
  
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    reset
  } = useForm<PostCommentDTO>({
    resolver: zodResolver(PostCommentSchema),
    mode:"onTouched"
  })

  const handlerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file))
      setValue("comment", file, {shouldValidate: true})
    }
  }

  const onSuccessCallback = () => {
    reset(),
    setPreview(undefined)
  }

  const {mutate, isPending} = usePostComment( tweetId, onSuccessCallback)

  const submit = (data: PostCommentDTO) => {
    const formData = new FormData()
    formData.append("text", data.text || "")
    if(data.comment) formData. append("comment", data.comment)
    
    mutate(formData)
  }

  useEffect( () => {
    if(errors.comment){
      toast.error(errors.comment.message)
    }
  }, [errors])

  return (
    <form className="border-b border-[var(--gray-color)] px-5 py-2"
      onSubmit={handleSubmit(submit)}>
      <div className="flex gap-2">
        <Avatar className="size-15">
          <AvatarImage src={AuthUser?.image}/>
          <AvatarFallback className="text-[var(--primary-color)] text-4xl font-bold">
            {AuthUser?.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        <div className="w-full flex flex-col">
          <div className="w-full flex">
            <TextareaAutosize {...register("text")} 
              className="resize-none w-full text-lg text-white p-2 focus:outline-0"
              placeholder="Type your reply!" />
            <div className="flex gap-3 items-center">
              <Input id="image" type="file" accept="image/"
              onChange={handlerImageChange} className="hidden"/>
              <Label htmlFor="image">
                <LuImagePlus className="size-6 text-[var(--primary-color)] hover:text-[var(--hover-color)]"/></Label>
              {isPending ?
              <Button disabled variant={"ghost"} className="text-base font-bold bg-[var(--primary-color)] hover:bg-[var(--hover-color)]">
                Posting</Button> :

              <Button type="submit" className="text-base font-bold bg-[var(--primary-color)] hover:bg-[var(--hover-color)]">
                Post</Button>
              }

              </div>
          </div>
          {preview && ( 
            <div className="flex mx-2">
              <img src={preview} className="max-h-60"/> 
              <XCircleIcon onClick={()=>{setPreview(undefined)}} className="-ml-6 text-[var(--gray-color)] hover:text-[#dc2626]" />
              </div>
            )}
          </div>
        </div>
      </form>
  )
}