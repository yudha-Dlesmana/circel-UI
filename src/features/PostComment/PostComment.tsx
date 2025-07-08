import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostComment } from "@/features/PostComment/usePostComments";
import { useUser } from "@/features/Profile/User/useUsers";
import { PostTweetsDTO, PostTweetsSchema } from "@/types/PostTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import TextareaAutosize from "react-textarea-autosize"
import { toast } from "sonner";

export function PostComment({tweetId}:{tweetId: number}){
  const {AuthUser} = useUser()
  const [preview, setPreview] = useState<string | undefined>(undefined)
  
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    reset
  } = useForm<PostTweetsDTO>({
    resolver: zodResolver(PostTweetsSchema),
    mode:"onTouched"
  })

  const handlerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file))
      setValue("image", file, {shouldValidate: true})
    }
  }

  const onSuccessCallback = () => {
    reset(),
    setPreview(undefined)
  }

  const {mutate} = usePostComment( tweetId, onSuccessCallback)

  const submit = (data: PostTweetsDTO) => {
    const formData = new FormData()
    formData.append("text", data.text || "")
    if(data.image) formData. append("image", data.image)
    
    mutate(formData)
  }

  useEffect( () => {
    if(errors.image){
      toast.error(errors.image.message)
    }
  }, [errors])

  return (
    <form className="border-b border-[var(--gray-color)] px-5 py-2"
      onSubmit={handleSubmit(submit)}>
      <div className="flex gap-2 items-center">
        <Avatar className="size-14">
          <AvatarImage src={AuthUser?.image}/>
          <AvatarFallback>{AuthUser?.name.charAt(0)}</AvatarFallback>
          </Avatar>
        <TextareaAutosize {...register("text")} 
          className="resize-none w-full text-lg text-white px-3 focus:outline-0"
          placeholder="Type your reply!" />
        <div className="flex gap-3 items-center">
          <Input id="image" type="file" accept="image/"
          onChange={handlerImageChange} className="hidden"/>
          <Label htmlFor="image">
            <LuImagePlus className="size-6 text-[var(--primary-color)] hover:text-[var(--hover-color)]"/></Label>
          <Button type="submit" className="text-base font-bold bg-[var(--primary-color)] hover:bg-[var(--hover-color)]">
            Post</Button>
          
          </div>
      </div>
        {preview && ( 
          <div className="flex justify-center mb-2">
            <img src={preview} className="max-h-60"/> 
            <XCircleIcon onClick={()=>{setPreview(undefined)}} className="-ml-6 text-[var(--gray-color)] hover:text-[#dc2626]" />
            </div>
          )}
      </form>
  )
}