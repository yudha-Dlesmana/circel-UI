import { LikeTweetButton } from "@/components/customUI/likeButton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PostDTO } from "@/types/PostTypes";
import { formatTweetDate } from "@/utils/Times";
import { XCircleIcon } from "lucide-react";
import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";

export function MediaMapping({ tweets }: { tweets: PostDTO[] }) {
  return (
    <div className="pt-3 px-5 grid grid-cols-3 gap-2">
      {tweets.map((tweet) =>
        tweet.image && <DetailImage tweet={tweet} />
      )}
    </div>
  )
}

function DetailImage({ tweet }: { tweet: PostDTO }) {
  const [showStatus, setShowStatus] = useState<boolean>(false)

  return (
    <Dialog>
      <DialogTrigger>
        <img className="rounded" src={tweet.image} />
        </DialogTrigger>
      <DialogContent className="sm:max-w-max p-0">
        <div className="flex gap-4">
          <img 
          className="object-contain rounded-l w-lg"
          src={tweet.image} />
          <div className="text-[#FFFFFF] flex w-full border-l p-4 gap-2">
            <Avatar className="size-15">
              <AvatarImage src={tweet.userImage} />
              </Avatar>
            <div className="">
              <div className="flex gap-1 text-[#909090]">
                <h1 className="font-semibold text-[#FFFFFF]">{tweet.name}</h1>
                <h1 className="">{tweet.username}</h1>
                <h1>•</h1>
                <h1>{formatTweetDate(tweet.createAt.toLocaleString())}</h1>
                </div>
              <p>{tweet.text}</p>

            <div className="">
              <p className="flex gap-1 items-center">
                <LikeTweetButton tweetId={tweet.id}/></p>
              <div className="flex gap-1 items-center">
                <AiOutlineComment/> {tweet.comments} comments</div>
              </div>
              </div>


          </div>

        </div>


      </DialogContent>

    </Dialog>
  )

}