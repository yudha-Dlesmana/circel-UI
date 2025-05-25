import { Center } from "@/layout/Centers";
import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode"

type JwtPayload = {
  exp: number;
  [key: string]: any;
};


export function Protected(){
  const {token, logOut} = useAuthContext()
  const {pathname} = useLocation()
  
  // useEffect( () => {
  //   const interval = setInterval( async () => {
  //     try{
  //       await api.get("/authcheck", {headers: {Authorization: `Bearer ${token}`}})
  //       console.log("tes")
  //     }catch(error){
  //       logOut()
  //     }
  //   }, 20000);

  //   return () => {clearInterval(interval)}
  // }, [])

  useEffect( () => {
    const {exp} = jwtDecode<JwtPayload>(token as string)
    const now = Date.now() / 1000
    if(now > exp) logOut()
  },[pathname])

  return(
    !!token ?
      <Center>
        <Outlet/>
        </Center> : 
      <Navigate to={"/login"}/>
  )
}