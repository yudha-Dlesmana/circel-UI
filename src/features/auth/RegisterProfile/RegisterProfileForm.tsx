import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"
import { useState } from "react"
import { errorMessageStyles, inputStyles } from "../FormStyles"
import { useRegisterProfile } from "./RegisterProfileHooks"
import { RegisterProfileDTO, registerProfileSchema } from "@/types/ProfileTypes"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export function RegisterProfileForm(){
  const { mutate, isPending } = useRegisterProfile()

  const [preview, setPreview] = useState<string | undefined>(undefined)

  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<RegisterProfileDTO>({
    resolver: zodResolver(registerProfileSchema),
    mode: "onChange"
  })
  
  const handlerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file){
      setPreview(URL.createObjectURL(file))
      setValue("image", file, { shouldValidate: true }) 
    } 

  }

  const submit = (data: RegisterProfileDTO) => {
    const formData = new FormData()
    formData.append('name', data.name);
    if(data.bio) formData.append('bio', data.bio);
    if(data.bio) formData.append('image', data.image)

    
    mutate(formData)
  }

  return(
    <form className="flex w-[412px] space-x-5" onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col w-5/6 space-y-2">
        <div>
          <input {...register("name")} placeholder="Name" className="w-full p-2 text-white placeholder-[var(--gray-color)] focus:outline-0 focus:border-[var(--primary-color)] rounded-md border-1 border-[var(--gray-color)]"/>
          {errors.name && <p className={errorMessageStyles}>{errors.name.message}</p>}
          </div>
        <div>
          <textarea {...register('bio')} placeholder="Bio" className="w-full p-2 
          text-white placeholder-[var(--gray-color)] 
          focus:outline-0 focus:border-[var(--primary-color)] rounded-md
          border-1 border-[var(--gray-color)] resize-none"/> 
          {errors.bio && <p className={errorMessageStyles}>{errors.bio.message}</p>}
          </div>
        <button className="
        bg-[var(--primary-color)] hover:bg-[var(--hover-color)]
        w-fit px-3 py-1 
        rounded-md
        text-white font-bold text-md
        "
        type="submit"
        >{isPending? "Loading ..." : "Create Profile" }</button>
        </div>

      <input id="image" type="file" className="hidden"  onChange={handlerImageChange}/>
      <label htmlFor="image" className="flex flex-col items-center gap-2">
        <Avatar className="size-25">
          <AvatarImage src={preview}/>
          <AvatarFallback><Camera className="size-15" /></AvatarFallback>
        </Avatar>
        <button className="
        bg-destructive hover:bg-red-700
        px-2 py-1 
        rounded-md
        text-white font-bold text-sm" 
        onClick={(e)=> {e.preventDefault(); setPreview(undefined)}}>Delete</button>
        </label>
      {errors.image && <p className={errorMessageStyles}>{errors.image.message}</p>}
      
    </form>
  )

}