import { LikeTweetButton } from "@/features/Like/likeButton";
import { useTweets } from "@/features/tweet/useTweets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiOutlineComment } from "react-icons/ai";
import { formatFullTweetDate } from "@/utils/Times";


export function Tweet({ tweetId }: { tweetId: number }) {
  const { tweet, isLoading, error } = useTweets(tweetId);

  if(isLoading) return <h1> Loading ... </h1>
  if(error) return <h1> Error loading Tweet </h1>
  if(!tweet) return <h1>No Tweets</h1>

  return (
     <div key={tweet.id} className="flex gap-4 border-b border-[var(--gray-color)] px-5 py-4 ">
        <Avatar className="size-15">
          <AvatarImage src={tweet.userImage}/>
          <AvatarFallback>{tweet.name.charAt(0)}</AvatarFallback>
          </Avatar>
        <div className="space-y-2">
          <div>
            <h1 className="text-white font-medium text-lg">{tweet?.name}</h1>
            <h1 className="text-[#909090] text-sm">{tweet?.username}</h1>
            </div>
          <div>
            <p className="text-white text-xl">{tweet?.text}</p>
            <img className="max-h-75" src={tweet?.image} alt="" />
            </div>
          <div className="text-[#909090]"> {formatFullTweetDate(tweet.createAt.toLocaleString())}</div>
          <div className="flex gap-3 items-center text-[#909090] text-lg">
            <p className="flex gap-1 items-center">
              <LikeTweetButton tweetId={tweet.id}/></p>
            <p className="flex gap-1 items-center">
              <AiOutlineComment/> {tweet.comments} comments</p>
            </div>
          </div>
      </div>
  );
}
