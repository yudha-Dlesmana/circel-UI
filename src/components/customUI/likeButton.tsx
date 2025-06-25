import { useIsLiked } from "@/hooks/useIsLiked";
import { useLike } from "@/hooks/uselike";
import { useUnlike } from "@/hooks/useUnlike";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export function LikeButton({tweetId}: {tweetId: number}){
  const {data} = useIsLiked(tweetId);
  const {likeTweet} = useLike(tweetId);
  const {unlike} = useUnlike(tweetId)
  return(
    <>
    {data?.isLiked ? 
    <p className="flex items-center gap-1 ">
      <button className="text-red-600" onClick={()=> unlike()}>
        <GoHeartFill/></button>
      {data?.countlikes}</p>:
    <p className="flex items-center gap-1">
      <button onClick={()=> likeTweet()}>
        <GoHeart/> </button>
      {data?.countlikes}</p>
    }
    </>
  )

}