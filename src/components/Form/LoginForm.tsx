import { useForm } from "react-hook-form"
import { LoginFormDTO, loginSchema } from "../../types/AuthTypes"
import { zodResolver } from "@hookform/resolvers/zod"

import { NavLink } from "react-router"
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "./FormStyles"
import { useAuth } from "@/hooks/AuthHooks"

export function LoginForm(){
  // const { logIn } = useAuthContext()
  // const navigate = useNavigate()
  const {login} = useAuth()
  
  const {
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<LoginFormDTO>({
    resolver: zodResolver(loginSchema),
    mode:"onChange" 
  })

  // const submit = async (data : LoginFormDTO) => {
  //   try{
  //     const res = await api.post("/login", data)
  //     const token = res.data.token;
  //     logIn(token)
  //     navigate('/')
  //   } catch(error){
  //     if(axios.isAxiosError(error)){
  //       const message = 
  //         error.response?.data.message || 
  //         error.message || "Unknown Error"
  //       alert(message)
  //     } else {
  //       console.error("Unexpected Error:", error)
  //     } 
  //   }
  // }
  const submit = (data: LoginFormDTO) => {
    login.mutate(data)
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