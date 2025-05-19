import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "./FormStyles";
import { ForgotFormInputs, forgotSchema } from "../../types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

export function ForgotForm(){
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<ForgotFormInputs>({
    resolver: zodResolver(forgotSchema),
    mode:"onChange"
  })

  const submit = (data: ForgotFormInputs) => {
    if(data.email == user.email){
      navigate("/reset")
    } else {
      alert("email not found")
    }
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