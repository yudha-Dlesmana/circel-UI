import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { useAuth } from "@/context/Auth"

export function AuthProtected(){
  const navigate = useNavigate()
  const {token} = useAuth()
  useEffect( () => {
    if(token){
      navigate('/')
    }
  }, [token, navigate])
  return(
    <Outlet/>
  )
}