import { NavLink } from "react-router"
import logo from "../../assets/logo.svg"
import { RegisterForm } from "../../features/Auth/Register/RegisterForm"

export function Register(){
  return(
    <div className="space-y-5 pt-25">
      <img src={logo} className="w-28"/>
      <h1 className="text-white
      font-bold text-3xl">
        Create Account Circle</h1>
      <RegisterForm />
      <p className="text-white">
        Already have an account? <NavLink to="/login" className="
        text-[var(--primary-color)] 
        hover:text-[var(--hover-color)]
        font-bold">
        Login</NavLink></p>  
    </div>
        
  )
}