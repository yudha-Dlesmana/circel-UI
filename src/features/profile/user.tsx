import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EditProfile } from "../EditProfile/EditProfile"
import BackgoundProfile from '@/assets/BackgoundProfile.png'
import { MoveLeft } from "lucide-react"
import { useNavigate } from "react-router"
import { UserType } from "@/types/UserTypes"

export function User({user}: {user: UserType}){
  const navigate = useNavigate()
    return(
      <div className="pt-10 px-5 text-[#FFFFFF]">
        <h1 className="
        text-[#FFFFFF] text-3xl
        font-bold 
        flex items-center gap-3">
          <MoveLeft className="size-10" onClick={()=> navigate(-1)} />
          {user.name}</h1>
        <img 
        className="w-full h-40 rounded-md"
        src={BackgoundProfile} />
        <Avatar className="size-40 -mt-20 ml-5 "> 
          <AvatarImage src={user.image} className="" />
          <AvatarFallback className="text-[var(--primary-color)] text-2xl font-bold">
            {user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <EditProfile/>
        <div className="mt-12">
          <h1 className="text-2xl font-bold text-white">{user.name}</h1>
          <p className="text-[var(--gray-color)]">{user.username}</p>
          <p className="">{user.bio}</p>
          <div className=" flex gap-3">
            <div className="flex gap-1">
              <p className="font-bold text-white">{user.following}</p>
              <p>Following</p>
              </div>
            <div className="flex gap-1">
              <p className="font-bold text-white">{user.follower}</p>
              <p>Followers</p>
              </div>
            </div>
          </div> 
        </div>
    )
}