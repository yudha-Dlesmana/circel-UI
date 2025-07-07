import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MediaMapping } from "@/features/profile/MediaMapping";
import { TweetMapping } from "@/features/profile/PostMapping";
import { User } from "@/features/profile/user";
import { useUserTweets } from "@/features/profile/useUserTweet";
import { useUserByUsername } from "@/features/profile/useUserByUsername";
import { useUser } from "@/features/User/useUsers";
import { cn } from "@/lib/utils";
import { useParams } from "react-router";

export function Profile(){
  const { username: paramUsername } =useParams()
  const { user: authUser, isLoading: authLoading, error: authError } = useUser()
  const { UserByUsername, isLoading: userLoading, error: userError } = useUserByUsername(paramUsername ?? "")
  const profile = paramUsername ? UserByUsername : authUser
  const {TweetUser, isLoading: tweetLoading, error: tweetError} = useUserTweets(profile?.username ?? "");

  if (authLoading || userLoading) return <h1>Loading Profile</h1>
  if (authError || userError) return <h1>Failed to fetch Profile</h1>

  if ( !profile ) return<h1>Profile Not found</h1>;
  
  if (tweetLoading) return <h1>Loading Profile</h1>
  if (tweetError) return <h1>Failed to fetch Profile</h1>

  const active = cn("text-[#FFFFFF] rounded-none",
      "data-[state=active]:bg-transparent", 
      "data-[state=active]:border-b-4", 
      "data-[state=active]:border-b-[var(--primary-color)]")
  
  return (
    <>
    <User user={profile}/>
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

