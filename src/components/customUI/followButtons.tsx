import { useFollow } from "@/hooks/useFollows"
import { useIsFollow } from "@/hooks/useIsFollows"
import { useUnfollow } from "@/hooks/useUnfollow"

export function FollowButton1({userId}: {userId: string}){
  const {checked} = useIsFollow(userId)
  const { followUser } = useFollow()
  const { unfollowUser} = useUnfollow()
  return(
    <>
    {checked ? 
    <button onClick={()=> unfollowUser({targetId: userId})}>
      unfollow</button>:
    <button onClick={()=> followUser({targetId: userId})}>
      follow</button>
    }
    </>
  )
}

export function FollowButton2({userId}: {userId: string}){
  const {checked} = useIsFollow(userId)
  const { followUser } = useFollow()
  return(
    <>
    {checked ? 
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
    onClick={()=> followUser({targetId: userId})}
    >
      Follow</button>
    }
    </>
  )
}