import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Followers } from "@/features/Followers/Followers";
import { Followings } from "@/features/Followings/Followings";
import { cn } from "@/lib/utils";

export function Follow(){
  const active = cn("text-[#FFFFFF] rounded-none",
    "data-[state=active]:bg-transparent", 
    "data-[state=active]:border-b-4", 
    "data-[state=active]:border-b-[var(--primary-color)]")

  return (
    <>
      <h1 className="
        pt-10 px-5
        mb-2 text-[#FFFFFF] text-3xl
        font-bold 
        rounded-b-none"
      >
        Follows</h1>
      <Tabs defaultValue="follower">
        <TabsList className="
        w-full pb-0
        bg-transparent rounded-none 
        border-b-1 border-b-[#3F3F3F]
        ">
          <TabsTrigger value="follower"  className={active}>Follower</TabsTrigger>
          <TabsTrigger value="following" className={active}>Following</TabsTrigger>
        </TabsList>
        <TabsContent value="follower"><Followers/></TabsContent>
        <TabsContent value="following"><Followings/></TabsContent>
      </Tabs>
      

    </>
  )
}