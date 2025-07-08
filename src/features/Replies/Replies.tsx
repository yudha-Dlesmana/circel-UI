import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useReplies } from "@/features/Replies/useReplies";
import { formatTweetDate } from "@/utils/Times";

export function Replies({parentId}: {parentId: number}){
  const {replies} = useReplies(parentId)

  return (
    <>
      {replies?.map((reply)=> (
         <div key={reply.id} className="flex gap-4 pt-3 w-full">
          <Avatar className="size-13">
            <AvatarImage src={reply.userImage}/>
            <AvatarFallback>{reply.name.charAt(0)}</AvatarFallback>
            </Avatar>
          <div className="flex flex-col w-full min-w-0">
            <div className="flex gap-1 text-sm text-[#909090] flex-wrap">
              <h1 className="text-white font-medium ">{reply.name}</h1>
              <h1 className="">{reply.username}</h1>
              <h1>•</h1>
              <h1 className="">{formatTweetDate(reply.createAt.toLocaleString())}</h1>
              </div>
            <div className="">
              <p className="text-white">{reply.text}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  )

}