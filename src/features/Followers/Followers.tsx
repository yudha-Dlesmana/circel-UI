import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useFollower } from "./useFollowers"
import { FollowButton2 } from "../Follow/followButtons"
import { PuffLoader } from "react-spinners"

export function Followers(){
  const {followers, isLoading, fetchNextPage, hasNextPage, error} = useFollower()

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
        {followers?.pages.map((page) => (
          page.followers.map((follower) => (
            <li key={follower.id} className="flex items-start gap-3">
            <Avatar className="size-15">
              <AvatarImage src={follower.image}/>
              <AvatarFallback className="text-lg font-bold text-[var(--primary-color)]">
                {follower.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 text-sm items-center justify-between text-white">
              <div className="space-y-1">
                <h1 className="text-base font-bold text-white">{follower.name}</h1>
                <h1 className="text-sm text-[var(--gray-color)]">{follower.username}</h1>
                <h1 className="text-sm">{follower.bio}</h1>
                </div>
              <FollowButton2 userId={follower.id}/>
            </div>
          </li>
          ))
        ))}


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