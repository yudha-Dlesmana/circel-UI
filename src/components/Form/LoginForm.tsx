import { useForm } from "react-hook-form"
import { LoginFormInputs, loginSchema } from "../../types/AuthTypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useAuthStore } from "../../store/AuthStore"
import { NavLink, useNavigate } from "react-router"
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "./FormStyles"

export function LoginForm(){
  const { logIn } = useAuthStore()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode:"onChange" 
  })

  const submit = (data: LoginFormInputs) => {
    if (data.email == user.email){
      if(data.password == user.password){
        logIn()
        navigate("/home")
      }else{
        alert("wrong password")
      }
    } else {
      alert("wrong email/username")
    }
  }
  return (
    <form 
      onSubmit={handleSubmit(submit)}
      className= {formStyles}>
        <div className="flex flex-col">
          <input placeholder="Email" type="text"
          {...register("email")} className={inputStyles}/>
          {errors.email && <p className={errorMessageStyles}>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col">
          <input placeholder="Password" type="password" 
          {...register("password")} className={inputStyles}/>
          {errors.password && <p className={errorMessageStyles}>{errors.password.message}</p>}
        </div>
      <NavLink to="/forgot" className="self-end text-white hover:text-[var(--hover-color)]">
        Forgot password?</NavLink>
      <button className={buttonStyles}>
        Login</button>
      </form>
  )
}