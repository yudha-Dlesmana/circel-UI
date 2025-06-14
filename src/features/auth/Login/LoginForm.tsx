import { useForm } from "react-hook-form"
import { LoginFormDTO, loginSchema } from "@/types/AuthTypes"
import { zodResolver } from "@hookform/resolvers/zod"

import { NavLink } from "react-router"
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "@/features/auth/FormStyles"
import { useLogin } from "./LoginHooks"

export function LoginForm(){

  const {mutate, isPending} = useLogin()
  
  const {
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<LoginFormDTO>({
    resolver: zodResolver(loginSchema),
    mode:"onChange" 
  })

  const submit = (data: LoginFormDTO) => {
    mutate(data)
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
        { 
          isPending?   
            <span>
              Loading</span> : 
            <span>
              Login</span> 
        }
      </button>
        

      
      </form>
  )
}