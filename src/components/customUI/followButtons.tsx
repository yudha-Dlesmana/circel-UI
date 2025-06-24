import { useFollow } from "@/hooks/useFollows"
import { useIsFollow } from "@/hooks/useIsFollows"
import { useUnfollow } from "@/hooks/useUnfollow"

export function FollowButton({username}: {username: string}){
  const {data} = useIsFollow(username)
  const { followUser } = useFollow()
  const { unfollowUser} = useUnfollow()
  return(
    <>
    {data ? 
    <button onClick={()=> unfollowUser({targetUsername: username})}>
      unfollow</button>:
    <button onClick={()=> followUser({targetUsername: username})}>
      follow</button>
    }
    </>
  )
}

export function FollowButton2({username}: {username: string}){
  const {data} = useIsFollow(username)
  const { followUser } = useFollow()
  return(
    <>
    {data ? 
    <button className="
    text-[var(--gray-color)] font-bold 
    px-4 py-1 
    border-[var(--gray-color)] border-2 rounded-full"
    disabled>
      Following</button>:
    <button className="
    font-bold 
    px-4 py-1 
    border-2 rounded-full
    hover:border-[var(--hover-color)]
    hover:text-[var(--hover-color)]
    "
    onClick={()=> followUser({targetUsername: username})}
    >
      Follow</button>
    }
    </>
  )
}