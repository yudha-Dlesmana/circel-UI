import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useFollowing } from "./useFollowings"
import { FollowButton2 } from "@/features/Follow/followButtons"
import { PuffLoader } from "react-spinners"

export function Followings(){
  const {followings, isLoading, fetchNextPage, hasNextPage, error} = useFollowing()
  if(isLoading) return (
    <div className="flex justify-center mt-10">
      <PuffLoader color="#04A51E" size={7}/>
    </div>
  ) // next update skeleton

  if(error) return (
    <div className="flex justify-center mt-10">
      <h1 className="text-white text-xl">Error</h1>
    </div>
  )

  return(
    <div className="px-5">
      <ul className="space-y-5">
        {followings?.pages.map((page) => 
        page.followings.map((following) => 
          <li key={following.id} className="flex items-start gap-3">
            <Avatar className="size-15">
              <AvatarImage src={following.image}/>
              <AvatarFallback className="text-lg font-bold text-[var(--primary-color)]">
                {following.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 text-sm items-center justify-between text-white">
              <div className="space-y-1">
                <h1 className="text-base font-bold text-white">{following.name}</h1>
                <h1 className="text-sm text-[var(--gray-color)]">{following.username}</h1>
                <h1 className="text-sm">{following.bio}</h1>
                </div>
              <FollowButton2 userId={following.id}/>
            </div>
          </li>
        )
        )}
        </ul>
        {hasNextPage && 
          <div className="flex flex-col items-center">
            <button 
            onClick={() => {fetchNextPage()}}
            className="text-white mt-4 hover:underline"
            >
              show more</button>
            </div>}
    </div>
  )
}