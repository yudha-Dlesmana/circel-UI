import { Tweets } from "@/features/Tweets/Tweets";
import { TweetsInput2 } from "@/features/PostTweet/PostTweet";

export function Home(){
  
  return (
    <>
      <h1 className="
        pt-10 px-5
        mb-5 text-[#FFFFFF] text-3xl
        font-bold "
      >
        Home</h1>
      <TweetsInput2/>
      <Tweets />
    </>
  )
}