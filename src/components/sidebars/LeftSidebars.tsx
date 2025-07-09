import logo from "@/assets/logo.svg"
import { TbSmartHome } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb"
import { cn } from "tailwind-cn"
import { Link } from "react-router"
import { LuUserRoundSearch } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { TweetsInput1 } from "@/features/PostTweet/PostTweet";
import Cookies from "cookies-js"
import { useAuth } from "@/context/Auth";

const listMenuStyle = cn("text-white text-lg flex gap-4 items-center hover:text-[var(--hover-color)]")

export function SidebarLeft(){
  const {setToken} = useAuth()
  return ( 
    <div className={cn(
    "fixed",
    "left-0 top-0 w-[15vw] h-screen",
    "border-r border-[#3F3F3F]", 
    "py-10 px-5 z-50", 
    "flex flex-col justify-between")
    }>
      <div>
        <img src={logo} className="mb-6 w-40 hidden lg:block"/>
        <ListMenu />
        <CreatePostDialog/>
      </div>
      <button 
      onClick={() => {
        Cookies.expire('access-token')
        setToken(null)
      }}
      className="flex items-center gap-1 hover:text-[var(--hover-color)]">
        <TbLogout2 className="size-8"/> 
        <span className="hidden lg:block">LogOut</span>
        </button>
    </div>
  )
}


function ListMenu(){
  return (
    <ul className="space-y-5 mb-5">
      <li>
        <Link to={"/"} className={listMenuStyle}>
          <TbSmartHome className="size-8"/> 
          <span  className="hidden lg:inline">Home</span>
          </Link></li>
      <li> 
        <Link to={'/search'} className={listMenuStyle}>
          <LuUserRoundSearch className="size-8"/> 
          <span  className="hidden lg:inline">Search</span>
          </Link></li>
      <li>
        <Link to={'/follow'} className={listMenuStyle}>
          <AiOutlineHeart className="size-8"/> 
          <span className="hidden lg:inline">Follow</span>
          </Link></li>
      <li>
        <Link to={"/profile"} className={listMenuStyle}>
          <CgProfile className="size-8"/> 
          <span className="hidden lg:inline">Profile</span>
        </Link></li>
      </ul>
  )
}
function CreatePostDialog(){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn(
          "hidden lg:block",
          "w-full py-1 rounded-full",
          "bg-[var(--primary-color)] hover:bg-[var(--hover-color)]",
          "text-white text-lg font-bold")}>
            Create Post</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl gap-2"> 
        <TweetsInput1 />
        
      </DialogContent>
    </Dialog>
  )
}