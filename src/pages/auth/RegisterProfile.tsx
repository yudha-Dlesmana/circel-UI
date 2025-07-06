import logo from "@/assets/logo.svg"
import { RegisterProfileForm } from "@/features/auth/RegisterProfile/RegisterProfileForm"
import { useNavigate, useParams } from "react-router"

export function RegisterProfile(){
  const {token}  = useParams()
  const navigate = useNavigate()
  if(!token) { // ganti validarsi token benar atau salah
    navigate("/forgot")
    return null
  } 
  return(
    <div className="space-y-5 pt-25">
      <img src={logo} className="w-28"/>
      <h1 className="text-white
      font-bold text-3xl">
        Register Profile Circle</h1>
      <RegisterProfileForm token={token}/>

      
      </div>
  )
}