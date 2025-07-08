import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { usePostReply } from "@/features/PostReply/usePostReply"
import { useUser } from "@/features/Profile/User/useUsers"
import {  } from "@/types/PostTypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import TextareaAutosize from "react-textarea-autosize"
import { toast } from "sonner"
import { PostReplyDTO, PostReplySchema } from "./ReplyTypes"

export function PostReply({tweetId, parentId}: {tweetId: number, parentId: number}){
  const {AuthUser} = useUser()
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm<PostReplyDTO>({
    resolver: zodResolver(PostReplySchema),
    mode:"onTouched"
  })
  
  useEffect( () => {
      if(errors.text){
        toast.error(errors.text.message)
      }
    }, [errors])
  

  const {mutate} = usePostReply(tweetId, parentId, reset )

  const submit = (data: PostReplyDTO) => {
    const params = new URLSearchParams()
    params.append("text", data.text)
    mutate(params)
  }

  return(
    <form className="w-full py-2  "
      onSubmit={handleSubmit(submit)}>
      <div className="flex gap-2 items-start w-full">
        <Avatar className="size-13">
          <AvatarImage src={AuthUser?.image}/>
          <AvatarFallback>{AuthUser?.name}</AvatarFallback>
          </Avatar>
        <div className="flex w-full gap-2 min-w-0">
          <TextareaAutosize {...register("text")} 
            className="resize-none w-full  text-white  focus:outline-0"
            placeholder="Type your reply!" />
          <Button 
            className="
            px-2
            text-sm font-bold 
            bg-[var(--primary-color)] hover:bg-[var(--hover-color)]"
            type="submit" >
            Reply</Button>
        </div>
        </div>
    </form>
  )
}