import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useFollower } from "./useFollower"

export function Followers(){
  const {data} = useFollower()
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
              <button 
              // onClick={}
              className="border px-3 py-1 rounded-full font-bold">
                Follow
                </button>
            </div>

          </li>
        ))}
        </ul>
    </div>
  )
}