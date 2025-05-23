import { Center } from "@/layout/Centers";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";


export function Protected(){
  const {isAuthenticated} = useAuth()
  return(
    isAuthenticated ?
      <Center>
        <Outlet/>
        </Center> : 
      <Navigate to={"/login"}/>
  )
}