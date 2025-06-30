import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useUser } from "@/hooks/useUsers"
import { PostTweetsDTO, PostTweetsSchema } from "@/types/PostTypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import TextareaAutosize from "react-textarea-autosize"

export function RepliesInput(){
  const {data} = useUser()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<PostTweetsDTO>({
    resolver: zodResolver(PostTweetsSchema),
    mode:"onTouched"
  })

  const submit = (data: PostTweetsDTO) => {
    console.log(data)
  }

  return(
    <form className="border-b border-[var(--gray-color)] py-2 "
      onSubmit={handleSubmit(submit)}>
      <div className="flex gap-2 items-center">
        <Avatar className="size-10">
          <AvatarImage src={data?.image}/>
          <AvatarFallback>{data?.name}</AvatarFallback>
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