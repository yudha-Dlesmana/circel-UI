import { PostDTO } from "@/types/PostTypes";
import { Link } from "react-router";

export function MediaMapping({tweets} : {tweets: PostDTO[]}) {
  return (
    <div className="pt-3 px-5 grid grid-cols-3 gap-2">
    {tweets.map((tweet) => 
      tweet.image &&      
      <Link to={`/detail-image/${tweet.id}`}>  
        <img className="rounded" src={tweet.image} alt="" />
        </Link>
    )}
    </div>
  )
}