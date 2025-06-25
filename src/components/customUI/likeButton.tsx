import { useIsLiked } from "@/hooks/useIsLiked";
import { useLike } from "@/hooks/uselike";
import { useUnlike } from "@/hooks/useUnlike";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export function LikeButton({tweetId}: {tweetId: number}){
  const {data} = useIsLiked(tweetId);
  const {likeTweet} = useLike();
  const {unlike} = useUnlike()
  return(
    <>
    {data ? 

    <button onClick={()=> unlike({tweetId})}>
      <GoHeartFill/></button>:
    <button onClick={()=> likeTweet({tweetId})}>
      <GoHeart/></button>
    }
    </>
  )

}