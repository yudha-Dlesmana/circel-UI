import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSearch } from "./useSearch";
import { FollowButton2 } from "@/features/Follow/followButtons";
import { Link } from "react-router";
import { PuffLoader } from "react-spinners";

export function SearchUser({name}: {name: string}){
  const {search, isLoading, error} = useSearch(name)
  
  if(isLoading) return (
    <div className="flex justify-center mt-10">
      <PuffLoader color="#04A51E" size={7}/>
    </div>
  )
  if(error) return (
    <div className="flex justify-center mt-10">
      <h1 className="text-white text-xl">Error</h1>
    </div>
  )

  return (
    <div className="px-5">
      <ul className="space-y-5">
        {search?.map((item) => (
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
              <FollowButton2 userId={item.id}/>
            </div>
          </li>
        ))}
        </ul>
    </div>
  )

}

