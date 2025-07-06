import { useNavigate, useParams } from "react-router"
import logo from "../../assets/logo.svg"
import { ResetForm } from "../../features/auth/Reset/ResetForm"

export function Reset(){
  const {token} = useParams()
  const navigate = useNavigate()
  if(!token) { // ganti validarsi token benar atau salah
    navigate("/forgot")
    return null
  } 
  return(
    <div className="space-y-5 pt-32">
      <img src={logo} className="w-28"/>
      <h1 className="text-white
      font-bold text-3xl">
        Reset Password</h1>
      <ResetForm  token={token}/>
    </div>
  )
}