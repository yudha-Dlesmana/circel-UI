import { Outlet, useNavigate } from "react-router";
import { Main } from "../layout/MainLayouts";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAuth } from "@/context/Auth";

export function MainProtected(){
  const navigate = useNavigate()
   const { token, isInitialized } = useAuth()

  useEffect(() => {
    if (!isInitialized) return
    if (!token) {
      toast.error("Login your account")
      navigate("/login")
    }
  }, [token, isInitialized, navigate])


  return (
    <Main>
      <Outlet/>
      </Main>
  )
}