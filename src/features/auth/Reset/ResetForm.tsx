import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "../FormStyles";
import { ResetFormDTO, resetSchema } from "../../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/features/auth/Reset/ResetHooks";
import { useSearchParams } from "react-router";

export function ResetForm(){
  const { mutate, isPending } = useAuth()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  
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
    mutate( {token, data} )
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
        {
          isPending? 
            <span>
              Create New Password</span> :
            <span>
              ... new password</span>
        }
        </button>
      </form>
  )
}