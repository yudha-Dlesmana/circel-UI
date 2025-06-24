import { ListUser } from "@/features/search/ListUsers";
import { useState } from "react";
import { LuUserRoundSearch } from "react-icons/lu";
import { useDebounce } from "use-debounce"

export function Search(){
  const [name, setName] = useState<string>("")
  const value = useDebounce(name, 1000)

  
  return (
    <>
      <div className="relative pt-10 px-5 mb-4 text-[#FFFFFF] font-bold">
        <LuUserRoundSearch className="absolute left-10 top-15 -translate-y-1/2 text-[#FFFFFF] size-7 pointer-events-none" />
        <input
          type="text"
          className="pl-15 py-2 border-1 rounded-full w-full bg-[var(--gray-color)] text-[#FFFFFF] placeholder-[#FFFFFF] focus:outline-0 focus:border-[var(--primary-color)]" 
          placeholder="Search..."
          onChange={(e) => {setName(e.target.value)}}
        />
        </div>
      <ListUser name={value[0]}/>
    </>
  )
}