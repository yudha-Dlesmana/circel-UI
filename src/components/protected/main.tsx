import { Outlet, useNavigate } from "react-router";
import { Main } from "../layout/MainLayouts";
import { useAuth } from "@/context/Auth";
import { useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function MainProtected(){
  const navigate = useNavigate()
  const {token, loading} = useAuth()
  useEffect( () => {
    if(loading) return 
    if(!token){
      console.log(token)
      toast.error("Login your account")
      navigate('/login')
    }
  }, [token, navigate])

  if(loading){
    return(
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className={cn("h-10 w-10 animate-spin text-primary")} />
      </div>
    )
  }

  return (
    <Main>
      <Outlet/>
      </Main>
  )
}