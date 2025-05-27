import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logodw from "@/assets/logodw.svg"
import { cn } from "tailwind-cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import  AnyaSxF  from "@/assets/AnyaSxF.jpeg"
import BackgoundProfile from '@/assets/BackgoundProfile.png'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { ImagePlus, XCircleIcon } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LuImagePlus } from "react-icons/lu";
import { Button } from "@/components/ui/button";


export const backgoundStyle = cn("text-[#B2B2B2] bg-[#262626] py-3 px-4 rounded-lg")

export function SidebarRight(){
  return (
    <div className={cn("fixed",
    "right-0 top-0 w-[27%] h-screen",
    "border-l border-[#3F3F3F]" ,
    "p-4 z-50",
    "flex flex-col gap-2")}>
      <Profile/>
      <UserSuggestion />
      <Meta />
    </div>
  )
}

export function Profile(){
  return(
    <div className={backgoundStyle}>
      <h1 className="font-bold text-xl text-white mb-1">
        My Profile</h1>
      <img src={BackgoundProfile} className="w-full h-25"/>
      <Avatar className="size-20 -mt-10 ml-5"> 
        <AvatarImage src={AnyaSxF} className="" />
        </Avatar>
      <EditProfileDialog/>
        
      <div className="">
        <h1 className="font-bold text-lg text-white">Anya Forger</h1>
        <p className="text-sm text-[var(--gray-color)]">@anyaForger</p>
        <p>Loves peanuts & Bondman</p>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <p className="font-bold text-white">291</p>
            <p>Following</p>
            </div>
          <div className="flex gap-1">
            <p className="font-bold text-white">23</p>
            <p>Followers</p>
            </div>

          </div>
        </div>


      </div>
  )
}
export function EditProfileDialog(){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-end -mt-7 mb-1">
          <button className="border px-3 py-1 rounded-full font-bold text-sm">Edit Profile</button>
          </div>
        </DialogTrigger>
      <DialogContent className="sm:max-w-2xl"> 
        <DialogHeader>
          <DialogClose className="flex justify-end">
            <XCircleIcon className="text-gray-500 hover:text-[#dc2626] " />
            </DialogClose>
          </DialogHeader>
        <form className="">
          <div className="flex justify-center items-center gap-3 border-b border-[var(--gray-color)] mb-3 pb-3">
            <Avatar className="size-20">
              <AvatarImage src={AnyaSxF} className={"size-1000"}/>
              </Avatar>
            <TextareaAutosize  placeholder="what is happening?!" className="resize-none w-full text-white p-3 focus"/>
          </div>
          
              
          <div className="flex justify-between">
            <Input id="image" type="file" accept="image/" className="hidden"/>
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

export function UserSuggestion(){
  return(
    <div className={backgoundStyle}>
      <h1 className="font-bold text-xl text-white mb-1">
        Suggested for you</h1>
      <ListUser />
      
      </div>
  )
}
function ListUser() {
  return (
    <ul className="space-y-2">
      <li className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1>Loid Forger</h1>
            <p>@Twilight</p>
            </div>
          <button className="border px-3 py-1 rounded-full font-bold text-sm">Follow</button>
          </div>
        </li>
      <li className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1>Yor Forger</h1>
            <p>@Thorn Princess</p>
            </div>
          <button className="border px-3 py-1 rounded-full font-bold text-sm">Follow</button>
          </div>
        </li>
      <li className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1>Bond</h1>
            <p>@woff</p>
            </div>
          <button className="border px-3 py-1 rounded-full font-bold text-sm">Follow</button>
          </div>
        </li>
      <li className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1>Franky Franklin</h1>
            <p>@TheInformant</p>
            </div>
            <button className="border px-3 py-1 rounded-full font-bold text-sm">Follow</button>
          </div>
        </li>
      <li className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 items-center justify-between">
          <div className="">
            <h1>Becky Blackbell</h1>
            <p>@Blackbell</p>
          </div>
          <button className="border px-3 py-1 rounded-full font-bold text-sm">Follow</button>
          </div>
        </li>
      </ul>
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

