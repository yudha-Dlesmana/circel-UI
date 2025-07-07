import { useCheckCommentLiked, useCheckTweetLiked } from "@/features/Like/useCheckLiked";
import { useLikeTweet, useLikeComment } from "@/features/Like/useLike";
import { useRemoveLikeComment, useRemoveLikeTweet } from "@/features/Like/useRemoveLike";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export function LikeTweetButton({tweetId}: {tweetId: number}){
  const {TweetIsLiked} = useCheckTweetLiked(tweetId);
  const {likeTweet} = useLikeTweet(tweetId);
  const {removeTweetLike} = useRemoveLikeTweet(tweetId)
  return(
    <>
    {TweetIsLiked?.isLiked ? 
    <span className="flex items-center gap-1">
      <button 
      className="text-red-600 cursor-pointer" 
      onClick={()=> removeTweetLike()}>
        <GoHeartFill/></button>
      {TweetIsLiked?.countlikes}</span>:
    <span className="flex items-center gap-1">
      <button 
      className="cursor-pointer"
      onClick={()=> likeTweet()}>
        <GoHeart/> </button>
      {TweetIsLiked?.countlikes}</span>
    }
    </>
  )
}

export function LikeCommentButton({tweetId, commentId}: {tweetId: number, commentId: number}){
  const {CommentIsLiked} = useCheckCommentLiked(commentId);
  const {likeComment} = useLikeComment(tweetId, commentId);
  const {removeCommentLike} = useRemoveLikeComment(commentId)

  return(
    <>
    {CommentIsLiked?.isLiked ? 
    <p className="flex items-center gap-1 ">
      <button className="text-red-600" onClick={()=> removeCommentLike()}>
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