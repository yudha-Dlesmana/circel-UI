import { Dialog,  DialogContent, DialogTrigger  } from "@/components/ui/dialog";
import { PostDTO } from "@/types/PostTypes";

export function MediaMapping({tweets} : {tweets: PostDTO[]}) {
  return (
    <div className="pt-3 px-5 grid grid-cols-3 gap-2">
    {tweets.map((tweet) => 
      tweet.image && <DetailImage tweet={tweet}/>
    )}
    </div>
  )
}

function DetailImage({tweet}: {tweet: PostDTO}){
  return (
    <Dialog>
      <DialogTrigger>
        <img src={tweet.image}/>

      </DialogTrigger>
      <DialogContent>
        <img src={tweet.image}/>
      </DialogContent>
      
    </Dialog>
  )

}