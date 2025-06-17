import logo from "@/assets/logo.svg"
import { RegisterProfileForm } from "@/features/auth/RegisterProfile/RegisterProfileForm"

export function RegisterProfile(){
  return(
    <div className="space-y-5 pt-32">
      <img src={logo} className="w-28"/>
      <h1 className="text-white
      font-bold text-3xl">
        Register Profile Circle</h1>
      <RegisterProfileForm/>
      
      </div>
  )
}