import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFeeds } from "@/hooks/useFeeds";
import { } from "@radix-ui/react-avatar";

export function Feeds(){
  const {data, isLoading, error} = useFeeds()

  if(isLoading) return <h1> Loading ... </h1>
  if(error) return <h1> Error loading Feeds </h1>
  if(data?.length === 0 || !data) return <h1>No Feeds</h1>

  return(
    <>
    {data?.map((tweets) => 
      <div className="border-b border-[var(--gray-color)] px-5 pb-4">
        <Avatar>
          <AvatarImage src={tweets?.userImage}/>
          <AvatarFallback>{tweets?.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1>{tweets?.name}</h1>
        <h1>{tweets?.username}</h1>
        <h1>{tweets?.createAt.toLocaleString()}</h1>
        <p>{tweets?.text}</p>
        <img src={tweets?.image} alt="" />
        <p>likes{tweets?.likes}</p>
        <p>comments{tweets?.comments}</p>
      </div>
      
    )}
    </>
  )
}