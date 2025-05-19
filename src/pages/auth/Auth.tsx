import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";

export function Auth(){
  const {user} = useContext(AuthContext)
  if(!user.login){
    return (
      <Outlet />
    )
  } else {
    return <Navigate to={'/home'} />
  }
}