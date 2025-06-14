import logo from "@/assets/logo.svg"
import { TbSmartHome } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb"
import { cn } from "tailwind-cn"
import { Link } from "react-router"
import { LuImagePlus, LuUserRoundSearch } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Dialog, DialogClose, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize"
import { PostFormDTO, postSchema } from "@/types/PostTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import AnyaSxF from '@/assets/AnyaSxF.jpeg';
import { XCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const listMenuStyle = cn("text-white text-lg flex gap-4 items-center hover:text-[var(--hover-color)]")

export function SidebarLeft(){

  return ( 
    <div className={cn("fixed",
    "left-0 top-0 w-1/6 h-screen",
    "border-r border-[#3F3F3F]", 
    "p-10 z-50", 
    "flex flex-col justify-between")}>
      <div>
        <img src={logo} className="mb-6 w-40"/>
        <ListMenu />
        <CreatePostDialog/>
      </div>
      <button className="flex items-center gap-1 hover:text-[var(--hover-color)]">
        <TbLogout2 className="size-8"/> LogOut
        </button>
    </div>
  )
}

function CreatePostDialog(){
  const [preview, setPreview] = useState<string | null>(null)

  const handlerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file))
  }

  const {
    register,
    handleSubmit,
  } = useForm<PostFormDTO>({
    resolver: zodResolver(postSchema),
    mode:"onTouched"
  })

  const submit = (data: PostFormDTO) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn("w-full py-2 rounded-full",
          "bg-[var(--primary-color)] hover:bg-[var(--hover-color)]",
          "text-white text-xl font-medium")}>
            Create Post</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl gap-2"> 
        <DialogHeader>
          <DialogClose className="flex justify-end">
            <XCircleIcon className="text-gray-500 hover:text-[#dc2626] " />
            </DialogClose>
          </DialogHeader>
        <form className=""
        onSubmit={handleSubmit(submit)}>
          <div className="flex justify-center items-center gap-3 border-b border-[var(--gray-color)] mb-3 pb-3">
            <Avatar className="size-20">
              <AvatarImage src={AnyaSxF}/>
              </Avatar>
            <TextareaAutosize {...register("text")} placeholder="what is happening?!" className="resize-none w-full text-xl text-white p-3 focus:outline-0"/>
          </div>
          {preview && ( 
            <div className="flex justify-center mb-2">
              <img src={preview} className="max-h-96"/> 
              <XCircleIcon onClick={()=>{setPreview(null)}} className="-ml-6 text-[var(--gray-color)] hover:text-[#dc2626]" />
              </div>
            )}
          <div className="flex justify-between">
            <Input id="image" type="file" accept="image/"
              onChange={handlerImageChange} className="hidden"/>
            <Label htmlFor="image">
              <LuImagePlus className="size-7 text-[var(--primary-color)] hover:text-[var(--hover-color)]"/></Label>
            <Button className="text-lg font-bold bg-[var(--primary-color)] hover:bg-[var(--hover-color)]">
              Post</Button>
            </div>

          
          </form>
      </DialogContent>
    </Dialog>
  )
}

function ListMenu(){
  return (
    <ul className="space-y-5 mb-5">
      <li>
        <Link to={"/"} className={listMenuStyle}>
        <TbSmartHome className="size-8"/> Home
          </Link></li>
      <li> 
        <Link to={'/search'} className={listMenuStyle}>
          <LuUserRoundSearch className="size-8"/> Search
          </Link></li>
      <li>
        <Link to={'/follow'} className={listMenuStyle}>
          <AiOutlineHeart className="size-8"/> Follow
          </Link></li>
      <li>
        <Link to={"/profile"} className={listMenuStyle}>
          <CgProfile className="size-8"/> Profile
        </Link></li>
      </ul>
    
  )
}