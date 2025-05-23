
import { useAuthContext } from "@/contexts/AuthContext"
import { TbLogout2 } from "react-icons/tb"

export function Home(){
  const {logOut} = useAuthContext()
  return (
    <div className="flex-col space-y-10">
    <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
    <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
      <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
      <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
      <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
      <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
      <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
      <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
      <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
      <button className="
      text-xl
      px-5 
      flex gap-3 items-center"
      onClick={logOut}>
      <TbLogout2 className="size-10"/>
      LogOut
      </button>
    </div>
  )
}

function useAuthStore(): { logOut: any } {
  throw new Error("Function not implemented.")
}
