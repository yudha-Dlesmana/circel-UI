import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useComments } from "@/hooks/tweet/useComment";
import { formatTweetDate } from "@/utils/Times";

export function Comments({tweetId}: {tweetId: number}){
  const {comment, isLoading, error} = useComments(tweetId)

  if(isLoading) return <h1>loading</h1>
  if(error)return <h1>{error.message}</h1>

  return(
    <>
    {comment?.map((item) => 
      <div key={item.id} className="flex gap-4 border-b border-[var(--gray-color)] px-5 py-4 ">
        <Avatar className="size-15">
          <AvatarImage src={item.userImage}/>
          <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
          </Avatar>
        <div className="space-y-2">
          <div className="text-[#909090] flex gap-1 text-xl">
            <h1 className="text-white font-medium">{item?.name}</h1>
            <h1>{item?.username}</h1>
            <h1>•</h1>
            <h1>{formatTweetDate(item?.createAt.toLocaleString())}</h1>
            </div>
          <div>
            <p className="text-white text-lg">{item?.text}</p>
            <img className="max-h-75" src={item?.image} alt="" />
            </div>
          <p>{item.replies}replies</p> 
          {/* <div className="flex gap-3 items-center text-[#909090] text-xl">
            {/* <p className="flex gap-1 items-center">
              <LikeButton tweetId={data.id}/></p> */}
            {/* <p className="flex gap-1 items-center">
              <AiOutlineComment/> {data?.comments} comments</p> */}
            {/* </div> */}
          </div>
      </div>
    )}
    </>
  )

}