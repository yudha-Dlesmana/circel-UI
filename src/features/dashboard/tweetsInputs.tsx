import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostTweets } from "@/hooks/tweet/usePostTweets";
import { useUser } from "@/hooks/user/useUsers";
import { PostTweetsDTO, PostTweetsSchema } from "@/types/PostTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import TextareaAutosize from "react-textarea-autosize"
import { toast } from "sonner";

export function TweetsInput(){
  const {user} = useUser()
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

  const {mutate, isPending} = usePostTweets(onSuccessCallback)

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
    <form className="border-b border-[var(--gray-color)] px-5 pb-4"
      onSubmit={handleSubmit(submit)}>
      <div className="flex gap-2 mb-">
        <Avatar className="size-15">
          <AvatarImage src={user?.image}/>
          <AvatarFallback>{user?.name}</AvatarFallback>
          </Avatar>
        <TextareaAutosize {...register("text")} placeholder="what is happening?!" className="resize-none w-full text-xl text-white px-3 focus:outline-0"/>
        <div className="flex gap-3 items-center">
          <Input id="image" type="file" accept="image/"
          onChange={handlerImageChange} className="hidden"/>
          <Label htmlFor="image">
            <LuImagePlus className="size-7 text-[var(--primary-color)] hover:text-[var(--hover-color)]"/></Label>
          {isPending ? 
          <Button  disabled className="text-lg font-bold bg-[var(--primary-color)] ">
            Loading</Button> :
          <Button className="text-lg font-bold bg-[var(--primary-color)] hover:bg-[var(--hover-color)]">
            Post</Button>
          }
          
          </div>
      </div>
        {preview && ( 
          <div className="flex justify-center mb-2">
            <img src={preview} className="max-h-96"/> 
            <XCircleIcon onClick={()=>{setPreview(undefined)}} className="-ml-6 text-[var(--gray-color)] hover:text-[#dc2626]" />
            </div>
          )}
      </form>
  )
}