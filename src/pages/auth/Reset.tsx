import { useNavigate, useParams } from "react-router"
import logo from "../../assets/logo.svg"
import { ResetForm } from "../../features/Auth/Reset/ResetForm"

export function Reset(){
  const {token} = useParams()
  const navigate = useNavigate()
  if(!token) { // ganti validasi token benar atau salah
    navigate("/forgot")
    return null
  } 
  return(
    <div className="space-y-5 pt-32">
      <img src={logo} className="w-28"/>
      <h1 className="
      font-bold text-2xl">
        Reset Password</h1>
      <ResetForm token={token}/>
    </div>
  )
}