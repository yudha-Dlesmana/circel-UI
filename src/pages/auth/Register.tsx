import logo from "../../assets/logo.svg"
import { RegisterForm } from "../../components/Form/RegisterForm"

export function Register(){
  return(
    <div className="space-y-5 pt-32">
      <img src={logo} className="w-28"/>
      <h1 className="text-white
      font-bold text-3xl">
        Create Account Circel</h1>
      <RegisterForm />
      <p className="text-white">
        Already have an account? <a href="/login" className="
        text-[var(--primary-color)] 
        hover:text-[var(--hover-color)]
        font-bold">
        Login</a></p>  
    </div>
        
  )
}