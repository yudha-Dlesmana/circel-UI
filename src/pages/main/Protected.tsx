import { Center } from "@/layout/Centers";
import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";


export function Protected(){
  const {isAuthenticated} = useAuthContext()
  return(
    isAuthenticated ?
      <Center>
        <Outlet/>
        </Center> : 
      <Navigate to={"/login"}/>
  )
}