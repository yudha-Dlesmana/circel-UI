import { LikeTweetButton } from "@/components/customUI/likeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFeeds } from "@/hooks/useFeeds";
import { formatTweetDate } from "@/utils/Times";

import { AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router";

export function Feeds(){
  
  const {data, isLoading, error} = useFeeds()

  if(isLoading) return <h1> Loading ... </h1>
  if(error) return <h1> Error loading Feeds </h1>
  if(data?.length === 0 || !data) return <h1>No Feeds</h1>

  return(
    <>
    {data.map((tweets) => 
      <div key={tweets.id} className="flex gap-4 border-b border-[var(--gray-color)] px-5 py-4 ">
        <Avatar className="size-13">
          <AvatarImage src={tweets.userImage}/>
          <AvatarFallback>{tweets.name.charAt(0)}</AvatarFallback>
          </Avatar>
        <div className="space-y-2">
          <div className="text-[#909090] flex gap-1 text-lg">
            <h1 className="text-white font-medium">{tweets.name}</h1>
            <h1>{tweets?.username}</h1>
            <h1>•</h1>
            <h1>{formatTweetDate(tweets?.createAt.toLocaleString())}</h1>
            </div>
          <Link to={`/status/${tweets.id}`} className="flex flex-col gap-2">
            <p className="text-white text-xl break-words text-left">{tweets.text}</p>
            <img className="max-h-60 object-contain self-start" src={tweets.image} alt="" />
            </Link>
          <div className="flex gap-3 items-center text-[#909090] text-xl">
            <p className="flex gap-1 items-center">
              <LikeTweetButton tweetId={tweets.id}/></p>
            <Link to={`/status/${tweets.id}`} className="flex gap-1 items-center">
              <AiOutlineComment/> {tweets.comments} comments</Link>
            </div>
          </div>
      </div>
      
    )}
    </>
  )
}