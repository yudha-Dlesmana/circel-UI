import { LikeTweetButton } from "@/features/Like/likeButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTweetsInfinite } from "@/features/Tweets/useTweet";
import { formatTweetDate } from "@/utils/Times";

import { AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router";

export function Tweets(){
  
  const {InfiniteTweet, isLoading, fetchNextPage, hasNextPage, error} = useTweetsInfinite()

  if(isLoading) return <h1> </h1>
  if(error) return <h1> Error loading Feeds </h1>
  if (!InfiniteTweet || InfiniteTweet.pages.length === 0) return <h1>No Feeds</h1>;

  return(
    <>
    {InfiniteTweet.pages.map((page) => 
    page.tweets.map((tweet) => (
      <div
        key={tweet.id}
        className="flex gap-4 border-b border-[var(--gray-color)] px-5 py-4"
      >
        <Avatar className="size-13">
          <AvatarImage src={tweet.userImage} />
          <AvatarFallback>{tweet.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <div className="text-[#909090] flex gap-1 text-lg">
              <h1 className="text-white font-medium">{tweet.name}</h1>
              <h1>{tweet.username}</h1>
              <h1>•</h1>
              <h1>{formatTweetDate(tweet.createAt.toLocaleString())}</h1>
            </div>
          <Link to={`/status/${tweet.id}`} className="flex flex-col gap-2">
            <p className="text-white text-xl break-words text-left">
              {tweet.text}
            </p>
            {tweet.image && (
              <img
                className="max-h-60 object-contain self-start"
                src={tweet.image}
                alt=""
              />
            )}
          </Link>
          <div className="flex gap-3 items-center text-[#909090] text-xl">
            <span className="flex gap-1 items-center">
              <LikeTweetButton tweetId={tweet.id} />
            </span>
            <Link
              to={`/status/${tweet.id}`}
              className="flex gap-1 items-center"
            >
              <AiOutlineComment /> {tweet.comments} comments
            </Link>
            </div>
          </div>
        </div>
      ))
    )}
    {hasNextPage && (
      <div className="flex flex-col items-center">
        <button
          onClick={() => fetchNextPage()}
          className="text-white mt-4 hover:underline"
          >
          Show more
          </button>
      </div>
    )}
    </>
  )
}