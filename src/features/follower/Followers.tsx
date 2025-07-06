
import { useFollower } from "./useFollower"

export function Followers(){
  // const {followers} = useFollower()
  return(
    <div className="px-5">
      <ul className="space-y-5">
        {/* {followers?.map((follower) => (
          <li className="flex items-start gap-3">
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
              <FollowButton2 username={follower.username}/>
            </div>

          </li>
        ))} */}
        </ul>
    </div>
  )
}