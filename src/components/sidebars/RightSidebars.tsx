import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logodw from "@/assets/logodw.svg"
import { cn } from "tailwind-cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackgoundProfile from '@/assets/BackgoundProfile.png'
import { useUser } from "@/hooks/useUsers";
import { EditProfile } from "@/components/sidebars/EditProfile/EditProfile";
import { SuggestionCard } from "./SuggestedForYou/SuggestionCard";


export const backgoundStyle = cn("text-[#B2B2B2] bg-[#262626] py-3 px-4 rounded-lg")

export function SidebarRight(){
  return (
    <div className={cn("fixed",
    "right-0 top-0 w-[27%] h-screen",
    "border-l border-[#3F3F3F]" ,
    "p-4 z-50",
    "flex flex-col gap-2")}>
      <ProfileCard/>
      <SuggestionCard />
      <Meta />
    </div>
  )
}

export function ProfileCard(){
  const {data} = useUser()
  return(
    <div className={backgoundStyle}>
      <h1 className="font-bold text-lg text-white mb-1">
        My Profile</h1>
      <img src={BackgoundProfile} className="w-full h-25 rounded-md"/>
      <Avatar className="size-20 -mt-10 ml-5"> 
        <AvatarImage src={data?.image} className="" />
        <AvatarFallback className="text-[var(--primary-color)] text-2xl font-bold">
          {data?.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <EditProfile/>
        
      <div>
        <h1 className="text-base font-bold text-white">{data?.name}</h1>
        <p className="text-xs text-[var(--gray-color)]">{data?.username}</p>
        <p className="text-sm">{data?.bio}</p>
        <div className="text-sm flex gap-3">
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

export function Meta(){
  return(
    <div className={backgoundStyle}>
      <div className="flex items-center gap-2">
        <p className="text-xs">Developed by yudha dwi lesmana</p>
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

