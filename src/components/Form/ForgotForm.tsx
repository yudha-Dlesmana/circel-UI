import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "./FormStyles";
import { ForgotFormDTO, forgotSchema } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { api } from "@/utils/Apis";

export function ForgotForm(){
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<ForgotFormDTO>({
    resolver: zodResolver(forgotSchema),
    mode:"onChange"
  })

  const submit = async (data: ForgotFormDTO) => {
    const res = await api.get('/user', {params: data})
    !!res ? navigate("/reset") : alert(`email ${data} is not registered`)
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