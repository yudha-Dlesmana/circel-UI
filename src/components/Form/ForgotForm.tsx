import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "./FormStyles";
import { ForgotFormDTO, forgotSchema } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/AuthHooks";

export function ForgotForm(){
  const {forgotPassword} = useAuth()

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<ForgotFormDTO>({
    resolver: zodResolver(forgotSchema),
    mode:"onChange"
  })

  const submit = async (data: ForgotFormDTO) => {
    forgotPassword.mutate(data)
  }

  return(
    <form className= {formStyles} onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col">
        <input type="text" placeholder="Email" 
        {...register("email")}className={inputStyles}/>
        {errors.email && <p className={errorMessageStyles}>{errors.email.message}</p>}
        </div>
      <button className={buttonStyles}>
        Send Instruction</button>
      </form>
  )
}