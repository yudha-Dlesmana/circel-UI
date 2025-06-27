import { useCheckCommentLiked, useIsLiked } from "@/hooks/like/useIsLiked";
import { useLike, useLikeComment } from "@/hooks/like/uselike";
import { useRemoveLikeComment, useUnlike } from "@/hooks/like/useUnlike";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export function LikeTweetButton({tweetId}: {tweetId: number}){
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

export function LikeCommentButton({tweetId, commentId}: {tweetId: number, commentId: number}){
  const {CommentIsLiked} = useCheckCommentLiked(commentId);
  const {likeComment} = useLikeComment(tweetId, commentId);
  const {removeLikeComment} = useRemoveLikeComment(commentId)

  return(
    <>
    {CommentIsLiked?.isLiked ? 
    <p className="flex items-center gap-1 ">
      <button className="text-red-600" onClick={()=> removeLikeComment()}>
        <GoHeartFill/></button>
      {CommentIsLiked?.countlikes}</p>:
    <p className="flex items-center gap-1">
      <button onClick={()=> likeComment()}>
        <GoHeart/> </button>
      {CommentIsLiked?.countlikes}</p>
    }
    </>
  )
}