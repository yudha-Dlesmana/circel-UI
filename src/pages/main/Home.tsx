import { Feeds } from "@/features/dashboard/feeds";
import { TweetsInput } from "@/features/dashboard/tweetsInputs";

export function Home(){
  
  return (
    <>
      <h1 className="
        pt-10 px-5
        mb-5 text-[#FFFFFF] text-3xl
        font-bold "
      >
        Home</h1>
      <TweetsInput/>
      <Feeds />
    </>
  )
}