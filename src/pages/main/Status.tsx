import { CommentInput } from "@/features/tweet/commentInput";
import { Comments } from "@/features/tweet/comments";
import { Tweet } from "@/features/tweet/tweet";
import { MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router"

export function Status(){
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
    <Tweet tweetId={Number(id)}/>
    <CommentInput/>
    <Comments tweetId={Number(id)} />
    </>
  )
}