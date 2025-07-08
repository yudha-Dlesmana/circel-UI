import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logodw from "@/assets/logodw.svg"
import { cn } from "tailwind-cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackgoundProfile from '@/assets/BackgoundProfile.png'
import { useUser } from "@/features/Profile/User/useUsers";
import { EditProfileDialog } from "@/features/EditProfile/EditProfileDialog";
import { SuggestionCard } from "../../features/SuggestedForYou/SuggestionCard";
import { useLocation } from "react-router";


export const backgoundStyle = cn("text-[#B2B2B2] bg-[#262626] py-3 px-4 rounded-lg")

export function SidebarRight(){
  
  const location = useLocation()
  const hideSuggestion = location.pathname === "/profile"

  return (
    <div className={cn(
    "hidden, md:flex",
    "fixed",
    "right-0 top-0 w-1/4 h-screen",
    "border-l border-[#3F3F3F]" ,
    "p-4 z-50",
    "flex flex-col gap-2")}>
      
      {!hideSuggestion && <ProfileCard/>}
      <SuggestionCard />
      
      <Meta />
    </div>
  )
}

export function ProfileCard(){
  const {AuthUser} = useUser()
  
  return(
    <div className={backgoundStyle}>
      <h1 className="font-bold text-lg text-white mb-1">
        My Profile</h1>
      <div className="relative group block w-full max-h-30 overflow-hidden rounded-md">
        <img src={AuthUser?.background ||BackgoundProfile} className="w-full rounded-md"/>
        </div> 

      <Avatar className="size-20 -mt-10 ml-5 "> 
        <AvatarImage src={AuthUser?.image} className="" />
        <AvatarFallback className="text-[var(--primary-color)] text-4xl font-bold">
          {AuthUser?.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <EditProfileDialog/>
        
      <div>
        <h1 className="text-base font-bold text-white">{AuthUser?.name}</h1>
        <p className="text-xs text-[var(--gray-color)]">{AuthUser?.username}</p>
        <p className="text-sm">{AuthUser?.bio}</p>
        <div className="text-sm flex gap-3">
          <div className="flex gap-1">
            <p className="font-bold text-white">{AuthUser?.following}</p>
            <p>Following</p>
            </div>
          <div className="flex gap-1">
            <p className="font-bold text-white">{AuthUser?.follower}</p>
            <p>Followers</p>
            </div>

          </div>
        </div>


      </div>
  )
}

export function Meta(){
  return(
    <div className={backgoundStyle}>
      <div className="flex items-center gap-2">
        <p className="text-xs">Developed by Yudha Dwi L</p>
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
          </div>
      </div>
  )
}

