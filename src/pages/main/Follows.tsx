import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Followers } from "@/features/follows/followers";
import { Followings } from "@/features/follows/following";

export function Follow(){
  return (
    <>
      <h1>Follows</h1>
      <Tabs>
        <TabsList className="w-full">
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="follower">Follower</TabsTrigger>
        </TabsList>
        <TabsContent value="following"><Followings/></TabsContent>
        <TabsContent value="follower"><Followers/></TabsContent>
      </Tabs>
      {/* <Followers/> */}

    </>
  )
}