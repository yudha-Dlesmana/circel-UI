import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "./FormStyles";
import { ResetFormInputs, resetSchema } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

export function ResetForm(){
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<ResetFormInputs>({
    resolver: zodResolver(resetSchema),
    mode: "onChange"
  })

  const submit = (data: ResetFormInputs) => {
    navigate('/login')
  }

  return(
    <form className= {formStyles} onSubmit={handleSubmit(submit)}>
      <input type="password" placeholder="New Password" 
      {...register("newPass")}className={inputStyles}/>
      <div className="flex flex-col">
      <input type="password" placeholder="Confirm New Password"
      {...register("confirmPass")} className={inputStyles}/>
      {errors.confirmPass && <p className={errorMessageStyles}>{errors.confirmPass.message}</p>}
      </div>
      <button className={buttonStyles}>
        Create New Password</button>
      </form>
  )
}