import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePostTweets } from "@/features/PostTweet/usePostTweet";
import { useUser } from "@/features/User/useUsers";

import { zodResolver } from "@hookform/resolvers/zod";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import TextareaAutosize from "react-textarea-autosize"
import { toast } from "sonner";
import { PostTweetDTO, PostTweetSchema } from "./TweetsTypes";

export function TweetsInput1(){
  const {user} = useUser()
  const [preview, setPreview] = useState<string | undefined>(undefined)
  
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    reset
  } = useForm<PostTweetDTO>({
    resolver: zodResolver(PostTweetSchema),
    mode:"onTouched"
  })

  const handlerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file))
      setValue("tweet", file, {shouldValidate: true})
    }
  }
  const onSuccessCallback = () => {
    reset(),
    setPreview(undefined)
  }

  const {mutate, isPending} = usePostTweets(onSuccessCallback)

  const submit = (data: PostTweetDTO) => {
    const formData = new FormData()
    formData.append("text", data.text || "")
    if(data.tweet) formData. append("tweet", data.tweet)

    mutate(formData)
  }

  useEffect( () => {
    if(errors.tweet){
      toast.error(errors.tweet.message)
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
          <Input id="image1" type="file" accept="image/"
          onChange={handlerImageChange} className="hidden"/>
          <Label htmlFor="image1">
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

export function TweetsInput2(){
  const {user} = useUser()
  const [preview, setPreview] = useState<string | undefined>(undefined)
  
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    reset
  } = useForm<PostTweetDTO>({
    resolver: zodResolver(PostTweetSchema),
    mode:"onTouched"
  })

  const handlerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file))
      setValue("tweet", file, {shouldValidate: true})
    }
  }
  const onSuccessCallback = () => {
    reset(),
    setPreview(undefined)
  }

  const {mutate, isPending} = usePostTweets(onSuccessCallback)

  const submit = (data: PostTweetDTO) => {
    const formData = new FormData()
    formData.append("text", data.text || "")
    if(data.tweet) formData. append("tweet", data.tweet)

    mutate(formData)
  }

  useEffect( () => {
    if(errors.tweet){
      toast.error(errors.tweet.message)
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
          <Input id="image2" type="file" accept="image/"
          onChange={handlerImageChange} className="hidden"/>
          <Label htmlFor="image2">
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