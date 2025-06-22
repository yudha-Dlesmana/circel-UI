import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useFollowing } from "./useFollowing"

export function Followings(){
  const {data} = useFollowing()
  return(
    <div>

      <ul className="space-y-2">
        {data?.map((item) => (
          <li className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarImage src={item.image}/>
              <AvatarFallback className="text-lg font-bold text-[var(--primary-color)]">
                {item.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 text-sm items-center justify-between">
              <div>
                <h1>{item.name}</h1>
                <h1>{item.username}</h1>
                </div>
              
            </div>
          </li>
        ))}
        </ul>
    
    </div>
  )
}