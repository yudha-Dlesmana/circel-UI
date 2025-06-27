import { LikeButton } from "@/components/customUI/likeButton";
import { useTweets } from "@/hooks/tweet/useTweets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiOutlineComment } from "react-icons/ai";


export function Tweet({ tweetId }: { tweetId: number }) {
  const { data, isLoading, error } = useTweets(tweetId);

  if(isLoading) return <h1> Loading ... </h1>
  if(error) return <h1> Error loading Feeds </h1>
  if(!data) return <h1>No Feeds</h1>

  return (
     <div key={data.id} className="flex gap-4 border-b border-[var(--gray-color)] px-5 py-4 ">
        <Avatar className="size-15">
          <AvatarImage src={data.userImage}/>
          <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
          </Avatar>
        <div className="space-y-2">
          <div className="text-[#909090] flex gap-1 text-xl">
            <h1 className="text-white font-medium">{data?.name}</h1>
            <h1>{data?.username}</h1>
            <h1>•</h1>
            {/* <h1>{formatTweetDate(data?.createAt.toLocaleString())}</h1> */}
            </div>
          <div>
            <p className="text-white text-lg">{data?.text}</p>
            <img className="max-h-75" src={data?.image} alt="" />
            </div>
          <div className="flex gap-3 items-center text-[#909090] text-xl">
            <p className="flex gap-1 items-center">
              <LikeButton tweetId={data.id}/></p>
            <p className="flex gap-1 items-center">
              <AiOutlineComment/> {data?.comments} comments</p>
            </div>
          </div>
      </div>
  );
}
