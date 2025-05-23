import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logodw from "@/assets/logodw.svg"
import { cn } from "tailwind-cn";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import  AnyaSxF  from "@/assets/AnyaSxF.jpeg"
import Backgound from "@/assets/Backgound.png"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ImagePlus, XCircleIcon } from "lucide-react";

export const backgoundStyle = cn("text-[#B2B2B2] bg-[#262626] py-3 px-4 rounded-lg")

export function SidebarRight(){
  return (
    <div className={cn("fixed",
    "right-0 top-0 w-1/4 h-screen",
    "border-l border-[#3F3F3F]" ,
    "p-4 z-50",
    "flex flex-col gap-3")}>
      <div className={backgoundStyle}>
        <Avatar className="w-25 h-25"> 
          <AvatarImage src={AnyaSxF} />
        </Avatar>
        <EditProfileDialog />
          </div>
      <Meta />
    </div>
  )
}

export function Meta(){
  return(
    <div className={backgoundStyle}>
      <div className="flex items-center gap-3">
      <p>Developed by Your Name</p>
      <p>•</p>
      <FaGithub />
      <FaLinkedin />
      <FaFacebook />
      <AiFillInstagram />
      </div>

        <div id="row2" className=" text-xs
        flex gap-2 items-center">
          <p>Powered by</p>
          <img src={logodw} />
          <p>Dumbways Indonesia</p>
          <p>•</p>
          <p>#1 Coding Bootcamp</p></div>
      </div>
  )
}

export function EditProfileDialog(){
  return (
    <Dialog>
          <DialogTrigger asChild>
            <button className="rounded-full border-1 border-white px-3 py-1">
              Edit Profile </button>
          </DialogTrigger>
          <DialogContent className="bg-[#1D1D1D]">
            <DialogHeader>
              <div className="flex items-center mb-2">
                <DialogTitle className="text-white flex-1/2">Edit Profile</DialogTitle>
                <DialogClose>
                  <XCircleIcon className="text-gray-500 hover:text-white " /></DialogClose>
                </div>
              <img src={Backgound} className="w-full h-40 rounded-lg"/>
              <div className="-mt-15 pl-4 flex items-center  justify-center w-fit">
                <Avatar className="w-25 h-25">
                    <AvatarImage src={AnyaSxF} className={`
                      rounded-full w-24 p-0.5 bg-black`}/> 
                  </Avatar>
                <button
                  type="button"
                  className="absolute size-16 flex items-center justify-center 
                  bg-black/40 text-white rounded-full hover:bg-black/60"
                >
                  <ImagePlus className="size-8" /></button>
                  </div>
              </DialogHeader>
            <form className="space-y-2">
            <label className="border-1 border-gray-500
            p-0 flex-col items-start rounded-lg gap-0">
              <h1 className="text-gray-500 pt-2 pl-2">Name</h1>
              <input className="text-white
              pl-2 h-fit border-0 
              focus-visible:ring-0" type="text"/>
              </label>
            <label className="border-1 border-gray-500
            p-0 flex-col items-start rounded-lg gap-0">
              <h1 className="text-gray-500 pt-2 pl-2">Username</h1>
              <input className="text-white
              pl-2 h-fit border-0 
              focus-visible:ring-0" type="text" />
              </label>
            <label className="border-1 border-gray-500
            p-0 flex-col items-start rounded-lg gap-0">
              <h1 className="text-gray-500 pt-2 pl-2">Bio</h1>
              <textarea className="text-white
              pl-2 h-fit border-0 
              focus-visible:ring-0 resize-none" />
              </label>
              <div className="flex justify-end">
                <button className="bg-[#04A51E] text-lg font-bold rounded-full hover:bg-[#005E0E]">Save</button>
                </div>
            </form>
          </DialogContent>
          </Dialog>
  )
}