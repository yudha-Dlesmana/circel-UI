import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useReplies } from "@/features/replies/useReplies";
import { formatTweetDate } from "@/utils/Times";

export function Replies({parentId}: {parentId: number}){
  const {replies} = useReplies(parentId)

  return (
    <>
      {replies?.map((reply)=> (
         <div key={reply.id} className="flex gap-2 border-[var(--gray-color)]  ">
          <Avatar className="size-10">
            <AvatarImage src={reply.userImage}/>
            <AvatarFallback>{reply.name.charAt(0)}</AvatarFallback>
            </Avatar>
          <div className="">
            <div className="text-[#909090] text-sm flex gap-1">
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