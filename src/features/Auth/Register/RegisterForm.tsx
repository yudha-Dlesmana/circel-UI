import { useForm } from "react-hook-form";
import { buttonStyles, errorMessageStyles, inputStyles } from "../FormStyles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "./useRegister";
import { RegisterDTO, registerSchema } from "./RegisterTypes";

export function RegisterForm(){
  const {mutate, isPending} = useRegister()
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterDTO>({
    resolver: zodResolver(registerSchema),
    mode: "onChange"
  })

  const submit = (data: RegisterDTO) => {
    mutate(data) 
  }

  return(
    <form className="flex flex-col w-full space-y-3" onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col">
        <input type="text" placeholder="Name"
        {...register("name")} className={inputStyles}/>
        {errors.name && <p className={errorMessageStyles}>{errors.name.message}</p>}
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