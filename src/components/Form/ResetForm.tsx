import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "./FormStyles";
import { ResetFormDTO, resetSchema } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { api } from "@/utils/Apis";

export function ResetForm(){
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<ResetFormDTO>({
    resolver: zodResolver(resetSchema),
    mode: "onChange"
  })

  const submit = async (data: ResetFormDTO) => {
    await api.patch("/reset", data)
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