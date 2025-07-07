import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSearch } from "./useSearch";
import { FollowButton2 } from "@/features/Follow/followButtons";
import { Link } from "react-router";

export function ListUser({name}: {name: string}){
  const {data, isLoading, error} = useSearch(name)
  
  if(isLoading) return <h1>Loading</h1>
  if(error) return <h1>Error</h1>
  if(data?.length === 0 || !data) return <h1>User Not Found</h1>

  return (
    <div className="px-5">
      <ul className="space-y-5">
        {data?.map((item) => (
          <li className="flex items-start gap-3">
            <Link to={`/profile/${item.username}`}>
              <Avatar className="size-15">
                <AvatarImage src={item.image}/>
                <AvatarFallback className="text-lg font-bold text-[var(--primary-color)]">
                  {item.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </Link>
            <div className="flex flex-1 text-sm items-center justify-between text-white">
              <div className="space-y-1">
                <Link to={`/profile/${item.username}`} className="text-base font-bold text-white">{item.name}</Link>
                <h1 className="text-sm text-[var(--gray-color)]">{item.username}</h1>
                <h1 className="text-sm">{item.bio}</h1>
                </div>
              <FollowButton2 username={item.username}/>
            </div>
          </li>
        ))}
        </ul>
    </div>
  )

}

