import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { useAuth } from "@/context/Auth"

export function AuthProtected(){
  const navigate = useNavigate()
  const { token, isInitialized } = useAuth()

  useEffect(() => {
    if (!isInitialized) return
    if (token) {
      navigate("/")
    }
  }, [token, isInitialized, navigate])

  if (!isInitialized) return <div>Loading...</div>
  return(
    <div className=" lg:[20vw] text-white">
      <Outlet/>
      </div>

  )
}