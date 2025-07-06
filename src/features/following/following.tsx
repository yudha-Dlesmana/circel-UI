import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useFollowing } from "./useFollowing"
import { FollowButton2 } from "@/components/customUI/followButtons"

export function Followings(){
  const {data} = useFollowing()
  return(
    <div className="px-5">
      <ul className="space-y-5">
        {data?.map((item) => (
          <li className="flex items-start gap-3">
            <Avatar className="size-15">
              <AvatarImage src={item.image}/>
              <AvatarFallback className="text-lg font-bold text-[var(--primary-color)]">
                {item.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 text-sm items-center justify-between text-white">
              <div className="space-y-1">
                <h1 className="text-base font-bold text-white">{item.name}</h1>
                <h1 className="text-sm text-[var(--gray-color)]">{item.username}</h1>
                <h1 className="text-sm">{item.bio}</h1>
                </div>
              <FollowButton2 username={item.username}/>
            </div>
          </li>
        ))}
        </ul>
    
    </div>
  )
}