import { Comments } from "@/features/Comments/Comments";
import { PostComment } from "@/features/PostComment/PostComment";
import { TweetDetail } from "@/features/TweetDetail/TweetDetail";
import { MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router"

export function Tweet(){
  const {id} = useParams();
  const navigate = useNavigate()

  return(
    <>
    <h1 className="
    pt-10 px-5
    text-[#FFFFFF] text-3xl
    font-bold 
    flex items-center gap-3"
    >
    <MoveLeft className="size-10" onClick={()=> navigate(-1)} /> 
    Status</h1>
    <TweetDetail tweetId={Number(id)}/>
    <PostComment tweetId={Number(id)}/>
    <Comments tweetId={Number(id)} />
    </>
  )
}