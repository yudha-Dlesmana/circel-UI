import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSuggestion } from "./suggestionUserHooks";
import { FollowButton } from "@/components/customUI/followButtons";
import { Link } from "react-router";

export function SuggestionCard(){
  const { data } = useSuggestion()

  return(
    <div className="text-[#B2B2B2] bg-[#262626] py-3 px-4 rounded-lg">
      <h1 className="font-bold text-lg text-white mb-1">
        Suggested for you</h1>

      <ul className="space-y-2">
        {data?.map((item) => (
          <li className="flex items-center gap-3">
            <Link to={`/profile/${item.username}`}>
              <Avatar className="size-10">
                <AvatarImage src={item.image}/>
                <AvatarFallback className="text-lg font-bold text-[var(--primary-color)]">
                  {item.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Link>
            <div className="flex flex-1 text-sm items-center justify-between">
              <Link to={`/profile/${item.username}`}>
                <h1>{item.name}</h1>
                <h1>{item.username}</h1>
                </Link>
            </div>
            <FollowButton username={item.username}/>

          </li>
        ))}
        </ul>
    </div>
  ) 
}

