import { LikeCommentButton } from "@/components/customUI/likeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useComments } from "@/hooks/tweet/useComment";
import { formatTweetDate } from "@/utils/Times";
import { Replies } from "./replies";
import { useState } from "react";
import { RepliesInput } from "./repliesInput";

export function Comments({tweetId}: {tweetId: number}){
  const {comments, isLoading, error} = useComments(tweetId)

  const [openReplies, setOpenReplies] = useState<Record<number, boolean>>({})

  const toggleReplies = (commentId: number) => {
    setOpenReplies( (prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  if(isLoading) return <h1>loading</h1>
  if(error)return <h1>{error.message}</h1>

  return(
    <>
    {comments?.map((comment) => 
      <div key={comment.id} className="flex gap-4 border-b border-[var(--gray-color)] px-5 py-4 ">
        <Avatar className="size-14">
          <AvatarImage src={comment.userImage}/>
          <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
          </Avatar>
        <div className="space-y-2 w-full">
          <div className="text-[#909090]  flex gap-1">
            <h1 className="text-white font-medium">{comment?.name}</h1>
            <h1 className="">{comment?.username}</h1>
            <h1>•</h1>
            <h1 className="">{formatTweetDate(comment?.createAt.toLocaleString())}</h1>
            </div>
          <div className="space-y-2">
            <p className="text-white text-lg">{comment?.text}</p>
            <img className="max-h-75" src={comment?.image} alt="" />
            </div>
          
          <div className="flex gap-3 items-center text-[#909090]">
            <p className="flex gap-1 items-center">
              <LikeCommentButton tweetId={tweetId} commentId={comment.id}/></p>
            <p 
            onClick={() => toggleReplies(comment.id)} 
            className="cursor-pointer">
              {comment.replies} replies</p>
            </div>
          
          {openReplies[comment.id] && 
          <>
            <RepliesInput />
            <Replies parentId={comment.id}/>
            </>
          }
          </div>
      </div>
    )}
    </>
  )
}