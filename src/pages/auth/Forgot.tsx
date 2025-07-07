import { Link} from "react-router"
import logo from "../../assets/logo.svg"
import { ForgotForm } from "../../features/Auth/Forgot/ForgotForm"

export function Forgot(){
  return (
    <div className="space-y-5 pt-25">
      <img src={logo} className="w-28"/>
      <h1 className="text-white
      font-bold text-3xl">
        Forgot Password</h1> 
      <ForgotForm />
      <p className="text-white">
      Already have an account? <Link to="/login" className="
      text-[var(--primary-color)]
      hover:text-[var(--hover-color)]
      font-bold">
        Login</Link></p>  
    </div>
  )
}