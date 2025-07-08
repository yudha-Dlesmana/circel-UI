import { LikeTweetButton } from "@/features/Like/likeButton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formatTweetDate } from "@/utils/Times";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { AiOutlineComment } from "react-icons/ai";
import { Comments } from "../../Comments/Comments";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tweet } from "./TweetType";

export function MediaMapping({ tweets }: { tweets: Tweet[] }) {


  return (
    <div className="grid grid-cols-3 gap-1 px-5 pt-3">
      {tweets.map((tweet, i) =>
        tweet.image && (
          <DetailImage key={i} tweet={tweet}/>  
        ) 
      )}
    </div>
  )
}

function DetailImage({ tweet }: { tweet: Tweet }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="aspect-square bg-white rounded flex items-center justify-center w-full h-full">
          <img 
            src={tweet.image}
            alt="tweet image"
            className="object-contain rounded w-full h-full"
          />
        </div>
        
        </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] h-[90vh] p-0">
        <div className="flex">
          <div className="aspect-square bg-white rounded-l flex items-center justify-center w-full max-h-[90vh]">
            <img 
              src={tweet.image}
              alt="tweet image"
              className="object-contain rounded w-full h-full"
            />
            </div>
          <div className="text-[#FFFFFF] flex flex-col w-full h-[90vh] ">
            <div className="flex border-b border-[var(--gray-color)] p-5 gap-4">
            <Avatar className="size-15">
              <AvatarImage src={tweet.userImage} />
              <AvatarFallback>{tweet.name.charAt(0)}</AvatarFallback>
              </Avatar>
            <div>
              <div className="flex gap-1 text-[#909090]">
                <h1 className="font-semibold text-[#FFFFFF]">{tweet.name}</h1>
                <h1 className="">{tweet.username}</h1>
                <h1>•</h1>
                <h1>{formatTweetDate(tweet.createAt.toLocaleString())}</h1>
                </div>
              <p>{tweet.text}</p>
              <div className="flex gap-3">
                <p className="flex gap-1 items-center">
                  <LikeTweetButton tweetId={tweet.id}/></p>
                <p className="flex gap-1 items-center">
                  <AiOutlineComment/> {tweet.comments} comments</p>
                </div>
              </div>
            </div>      
            {/* <CommentInput tweetId={tweet.id}/> */}
            <ScrollArea className="flex-1 overflow-auto">
              <Comments tweetId={tweet.id}/>
              </ScrollArea>
            </div>
          </div>
      </DialogContent>
    </Dialog>
  )

}