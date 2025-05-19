import { useAuthStore } from "../../store/AuthStore"
import { TbLogout2 } from "react-icons/tb"

export function Home(){
  const {logOut} = useAuthStore()
  return (
    <>
    <button className="
        text-xl
        px-5 
        flex gap-3 items-center"
        onClick={logOut}>
        <TbLogout2 className="size-8"/>
        LogOut
        </button>
    </>
    
  )
}