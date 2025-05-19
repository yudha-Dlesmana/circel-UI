import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";

export function Protected(){
  const {user} = useContext(AuthContext)

  if(user.login){
    return(
      <Outlet/>
    )
  } else {
    return(
      <Navigate to={'/login'}/>
    )
  }
}