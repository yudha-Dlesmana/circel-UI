import { NavLink } from "react-router"
import logo from "@/assets/logo.svg"
import { LoginForm } from "@/features/auth/Login/LoginForm"


export function Login(){
  
  return( 
    <div className="space-y-5 pt-25">
      <img src={logo} className="w-28"/>
      <h1 className="text-white
      font-bold text-3xl">
        Login to Circle</h1>
      <LoginForm />
      <p className="text-white">
      Don't have an account yet? <NavLink to="/register" className="
      text-[var(--primary-color)] 
      hover:text-[var(--hover-color)]
      font-bold">
        Create account</NavLink></p>
    </div>
  )
}