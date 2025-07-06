import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSuggestion } from "./useSuggestion";
import { FollowButton } from "@/components/customUI/followButtons";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";

export function SuggestionCard(){
  const { suggestion, isLoading, isError } = useSuggestion()

  if(isError) return <h1>Error</h1>
  if(isLoading) return (
  <ul className="space-y-2">
    {Array.from({ length: 3 }).map((_, i) => (
    <li key={i} className="flex items-center gap-3">
      <div className="size-10 rounded-full overflow-hidden">
        <Skeleton className="w-full h-full rounded-full" />
      </div>
      <div className="flex flex-1 flex-col justify-between space-y-1">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-3 w-[100px]" />
      </div>
      <Skeleton className="h-8 w-20 rounded-md" />
    </li>
    ))}
  </ul>
  )

  return(
    <div className="text-[#B2B2B2] bg-[#262626] py-3 px-4 rounded-lg">
      <h1 className="font-bold text-lg text-white mb-1">
        Suggested for you</h1>

      <ul className="space-y-2">
        {suggestion?.map((item) => (
          <li className="flex items-center gap-3">
            <Link to={`/profile/${item.username}`}>
              <Avatar className="size-10">
                <AvatarImage src={item.image}/>
                <AvatarFallback className="text-lg font-bold text-[var(--primary-color)]">
                  {item.name.charAt(0)}</AvatarFallback>
                <Skeleton className="w-full h-full rounded-full" />
              </Avatar>
            </Link>
            <div className="flex flex-1 text-sm items-center justify-between">
              <Link to={`/profile/${item.username}`}>
                <h1>{item.name}</h1>
                {isLoading && <Skeleton className="h-4 w-[120px]" />}
                <h1>{item.username}</h1>
                {isLoading && <Skeleton className="h-3 w-[100px]" />}
                </Link>
            </div>
            <FollowButton username={item.username}/>

          </li>
        ))}
        </ul>
    </div>
  ) 
}

