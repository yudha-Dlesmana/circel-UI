import logo from "../../assets/logo.svg"
import { LoginForm } from "../../components/Form/LoginForm"

export function Login(){
  return( 
    <div className="space-y-5 pt-32">
      <img src={logo} className="w-28"/>
      <h1 className="text-white
      font-bold text-3xl">
        Login to Circel</h1>
      <LoginForm />
      <p className="text-white">
      Don't have an account yet? <a href="/register" className="
      text-[var(--primary-color)] 
      hover:text-[var(--hover-color)]
      font-bold">
        Create account</a></p>
    </div>
  )
}