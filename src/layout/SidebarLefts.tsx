import logo from "../assets/logo.svg"
import { TbSmartHome } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb"

import { cn } from "tailwind-cn"
import { NavLink } from "react-router"
import { LuUserRoundSearch } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useAuthContext } from "@/contexts/AuthContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

const listMenuStyle = cn("text-white text-lg flex gap-4 items-center hover:text-[var(--hover-color)]")

export function SidebarLeft(){
  const {logOut} = useAuthContext()
  return ( 
    <div className={cn("fixed",
    "left-0 top-0 w-1/5 h-screen",
    "border-r border-[#3F3F3F]", 
    "p-10 z-50", 
    "flex flex-col justify-between")}>
      <div>
        <img src={logo} className="mb-6 w-40"/>
        <ul className="space-y-5">
          <li>
            <NavLink to={"/"} className={listMenuStyle}>
            <TbSmartHome className="size-8"/> Home
              </NavLink></li>
          <li> 
            <NavLink to={'/search'} className={listMenuStyle}>
              <LuUserRoundSearch className="size-8"/> Search
              </NavLink></li>
          <li>
            <NavLink to={'/follow'} className={listMenuStyle}>
              <AiOutlineHeart className="size-8"/> Follow
              </NavLink></li>
          <li>
            <NavLink to={"/profile"} className={listMenuStyle}>
              <CgProfile className="size-8"/> Profile
            </NavLink></li>
          <CreatePostDialog/>
          {/* <button className={cn("w-full py-2 rounded-full",
          "bg-[var(--primary-color)] hover:bg-[var(--hover-color)]",
          "text-white text-xl font-medium")}>
            Create Post</button> */}
        </ul>
      </div>
      <button className="flex items-center gap-1 hover:text-[var(--hover-color)]" onClick={logOut}>
        <TbLogout2 className="size-8"/> LogOut
        </button>
    </div>
  )
}

function CreatePostDialog(){
  const {
    register,
    handleSubmit,
  } = useForm()

  const submit = () =>{}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn("w-full py-2 rounded-full",
          "bg-[var(--primary-color)] hover:bg-[var(--hover-color)]",
          "text-white text-xl font-medium")}>
            Create Post</button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(submit)}>
          <input {...register}></input>

          </form>
      </DialogContent>
    </Dialog>
  )
}
