import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, formStyles, inputStyles } from "../FormStyles";
import { RegisterFormDTO, registerSchema } from "@/types/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "./RegisterHooks";

export function RegisterForm(){
  const {mutate, isPending} = useRegister()
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormDTO>({
    resolver: zodResolver(registerSchema),
    mode: "onChange"
  })

  const submit = (data: RegisterFormDTO) => {
    mutate(data) 
  }

  return(
    <form className= {formStyles} onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col">
        <input type="text" placeholder="Full Name" 
        {...register("fullname")} className= {inputStyles}/>
        {errors.fullname && <p className={errorMessageStyles}>{errors.fullname.message}</p>}
        </div>
      <div className="flex flex-col">
        <input type="text" placeholder="Email"
        {...register("email")} className={inputStyles}/>
        {errors.email && <p className={errorMessageStyles}>{errors.email.message}</p>}
        </div>
      <div className="flex flex-col">
        <input type="password" placeholder="Password"
        {...register("password")} className={inputStyles}/>
        {errors.password && <p className={errorMessageStyles}>{errors.password.message}</p>}
        </div>
      <button className={buttonStyles}>
        {isPending ? 
          <span>
            Loading ...</span>:
          <span>
            Create</span> 
        }
        </button>
      </form>
  )
}