import { useTweets } from "@/hooks/useTweets";
import { MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router"

export function Status(){
  const {id} = useParams();
  const navigate = useNavigate()
  const {data, isLoading} = useTweets(Number(id))

  if(isLoading) return <h1>is loading</h1>

  return(
    <>
    <h1 className="
    pt-10 px-5
    mb-5 text-[#FFFFFF] text-3xl
    font-bold 
    flex items-center gap-3"
    >
    <MoveLeft className="size-10" onClick={()=> navigate(-1)} /> 
    Status</h1>
    <p>{data?.text}</p>
    </>
  )
}