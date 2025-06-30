import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MediaMapping } from "@/features/profile/MediaMapping";
import { TweetMapping } from "@/features/profile/PostMapping";
import { User } from "@/features/profile/user";
import { useUserTweets } from "@/hooks/tweet/useUserTweet";
import { useUser } from "@/hooks/user/useUsers";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { toast } from "sonner";

export function Profile(){
  const {user} = useUser()
  const username = user?.username ?? "";
  const {TweetUser, isLoading, error} = useUserTweets(username);

  useEffect(() => {
    if (!user) toast.error("User not found");
    if (error) toast.error("Failed to fetch tweets");
  }, [user, error]);

  if (!user || isLoading) {
    return <div className="text-white p-4">Loading...</div>;
  }

  const active = cn("text-[#FFFFFF] rounded-none",
      "data-[state=active]:bg-transparent", 
      "data-[state=active]:border-b-4", 
      "data-[state=active]:border-b-[var(--primary-color)]")
  
  return (
    <>
    <User user={user}/>
    <Tabs defaultValue="AllPost">
      <TabsList className="
      w-full pb-0
      bg-transparent rounded-none 
      border-b-1 border-b-[#3F3F3F]
      ">
        <TabsTrigger value="AllPost"  className={active}>All Post</TabsTrigger>
        <TabsTrigger value="Media" className={active}>Media</TabsTrigger>
        </TabsList>
      <TabsContent value="AllPost"><TweetMapping tweets={ TweetUser?? []}/></TabsContent>
      <TabsContent value="Media"><MediaMapping tweets={ TweetUser?? []}/></TabsContent>
      </Tabs>

    </>
    
  )
}