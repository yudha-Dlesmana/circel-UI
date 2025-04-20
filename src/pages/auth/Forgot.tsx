import logo from "../../assets/logo.svg"
import { ForgotForm } from "../../components/Form/ForgotForm"

export function Forgot(){
  return (
    <div className="space-y-5 pt-32">
      <img src={logo} className="w-28"/>
      <h1 className="text-white
      font-bold text-3xl">
        Forgot Password</h1> 
      <ForgotForm />
      <p className="text-white">
      Already have an account? <a href="/login" className="
      text-[var(--primary-color)]
      hover:text-[var(--hover-color)]
      font-bold">
        Login</a></p>  
    </div>
  )
}