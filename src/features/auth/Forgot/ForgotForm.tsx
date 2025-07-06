import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "../FormStyles";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotDTO, forgotSchema } from "@/features/auth/Forgot/ForgotTypes";
import { useForgot } from "./useForgot";

export function ForgotForm(){
  const {mutate, isPending} = useForgot()

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<ForgotDTO>({
    resolver: zodResolver(forgotSchema),
    mode:"onChange"
  })

  const submit = async (data: ForgotDTO) => {
    mutate(data)
  }

  return(
    <form className= {formStyles} onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col">
        <input type="text" placeholder="Email" 
        {...register("email")}className={inputStyles}/>
        {errors.email && <p className={errorMessageStyles}>{errors.email.message}</p>}
        </div>
      <button className={buttonStyles}>
        {isPending? 
          <span>
            Sending email</span>: 
          <span> 
            Send Instruction</span>
        }
        </button>
      </form>
  )
}