import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "../FormStyles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReset } from "@/features/Auth/Reset/useReset";
import { ResetPasswordDTO, resetPasswordSchema } from "@/features/Auth/Reset/ResetTypes";

export function ResetForm({token}: {token:string}){
  const { mutate, isPending } = useReset()
  
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<ResetPasswordDTO>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange"
  })

  const submit = (data: ResetPasswordDTO) => {
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
              Creating New Password</span> :
            <span>
              Reset Password</span>
        }
        </button>
      </form>
  )
}