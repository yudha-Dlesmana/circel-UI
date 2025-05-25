import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "./FormStyles";
import { ResetFormDTO, resetSchema } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/AuthHooks";
import { useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";

export function ResetForm(){
  const {resetPassword} = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  
  useEffect( () => {
    if (!token){
      navigate('/forgot')
    }
  }, [token])

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<ResetFormDTO>({
    resolver: zodResolver(resetSchema),
    mode: "onChange"
  })

  const submit = (data: ResetFormDTO) => {
    if(!token){return}
    resetPassword.mutate( {token, data} )
  }

  return(
    <form className= {formStyles} onSubmit={handleSubmit(submit)}>
      <input type="password" placeholder="New Password" 
      {...register("password")}className={inputStyles}/>
      <div className="flex flex-col">
      <input type="password" placeholder="Confirm New Password"
      {...register("confirmPassword")} className={inputStyles}/>
      {errors.confirmPassword && <p className={errorMessageStyles}>{errors.confirmPassword.message}</p>}
      </div>
      <button className={buttonStyles}>
        Create New Password</button>
      </form>
  )
}