import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { usePostReplies } from "@/hooks/tweet/usePostReplies"
import { useUser } from "@/hooks/user/useUsers"
import { PostRepliesDTO, PostRepliesSchema } from "@/types/PostTypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import TextareaAutosize from "react-textarea-autosize"
import { toast } from "sonner"

export function RepliesInput({tweetId, parentId}: {tweetId: number, parentId: number}){
  const {user} = useUser()
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm<PostRepliesDTO>({
    resolver: zodResolver(PostRepliesSchema),
    mode:"onTouched"
  })
  
  useEffect( () => {
      if(errors.text){
        toast.error(errors.text.message)
      }
    }, [errors])
  

  const {mutate} = usePostReplies(tweetId, parentId, reset )

  const submit = (data: PostRepliesDTO) => {
    const params = new URLSearchParams()
    params.append("text", data.text)
    mutate(params)
  }

  return(
    <form className="border-y border-[var(--gray-color)] py-2 "
      onSubmit={handleSubmit(submit)}>
      <div className="flex gap-2 items-center">
        <Avatar className="size-10">
          <AvatarImage src={user?.image}/>
          <AvatarFallback>{user?.name}</AvatarFallback>
          </Avatar>
        <TextareaAutosize {...register("text")} 
          className="resize-none w-full text-sm text-white px-3 focus:outline-0"
          placeholder="Type your reply!" />
        <Button 
          className="
          px-2
          text-sm font-bold 
          bg-[var(--primary-color)] hover:bg-[var(--hover-color)]"
          type="submit" >
          Reply</Button>
        </div>

    </form>
  )
}