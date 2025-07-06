import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, ImagePlus } from "lucide-react"
import BackgoundProfile from '@/assets/BackgoundProfile.png'
import { useState } from "react"
import { errorMessageStyles } from "../FormStyles"
import { useRegisterProfile } from "./useRegisterProfile"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterProfileDTO, registerProfileSchema } from "./RegisterProfileTypes"

export function RegisterProfileForm({token}: {token: string}){
  const { mutate, isPending } = useRegisterProfile();

  const [preview, setPreview] = useState<string | undefined>(undefined)
  const [previewBackground, setPreviewBackground] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<RegisterProfileDTO>({
    resolver: zodResolver(registerProfileSchema),
    mode: "onChange"
  })
  
  const handlerProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file){
      setPreview(URL.createObjectURL(file))
      setValue("profile", file, { shouldValidate: true }) 
    } 
  }
  const handlerBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file){
      setPreviewBackground(URL.createObjectURL(file))
      setValue("background", file, { shouldValidate: true }) 
    } 
  }

  const submit = (data: RegisterProfileDTO) => {
    const formData = new FormData()
    formData.append('bio', data.bio ?? "");
    if(data.profile) formData.append('profile', data.profile);
    if(data.background) formData.append('background', data.background)
    mutate( {token, formData} )
  }

  return(
    <form className="w-[412px] space-y-3" onSubmit={handleSubmit(submit)}>
      <div>
        <input id="backgound" type="file" className="hidden"  onChange={handlerBackgroundChange}/>
        <label htmlFor="backgound" className="relative group cursor-pointer w-full block">
          <img src={previewBackground || BackgoundProfile} 
          className="max-h-40 w-full rounded-md"/>
          <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-2 right-2">
                <ImagePlus className="size-10 text-[var(--hover-color)]"/>
              </div>
            </div>
          </label>
        </div>
      <div className="-mt-22 ml-7">
        <input id="profile" type="file" className="hidden"  onChange={handlerProfileChange}/>
        <label htmlFor="profile" 
        className="relative group cursor-pointer w-fit block"> 
        <Avatar className="size-35 object-cover"> 
          <AvatarImage src={preview} />
          <AvatarFallback className="text-[var(--primary-color)]">
            <Camera className="size-12"/></AvatarFallback>
          </Avatar>
        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
          </label>
          </div>
      {errors.profile && <p className={errorMessageStyles}>{errors.profile.message}</p>}
      <div className="flex flex-col space-y-2">
        <div>
          <textarea {...register('bio')} placeholder="Bio" className="w-full h-20 p-2 
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

      
      
    </form>
  )

}