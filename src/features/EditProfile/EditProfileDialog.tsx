import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import BackgoundProfile from '@/assets/BackgoundProfile.png'
import { useEffect, useState } from "react";
import { useUser } from "@/features/User/useUsers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BeatLoader } from "react-spinners"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CircleX, ImagePlus } from "lucide-react";
import { inputStyles, textareaStyles } from "@/features/Auth/FormStyles";
import { useEditProfile } from "./useEditProfile";
import { EditProfileDTO, EditProfileSchema } from "./EditProfileType";

export function EditProfileDialog(){
  const {user} = useUser()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const {mutate, isPending} = useEditProfile( () =>  setIsOpen(false))

  const [oriProfile, setOriProfile] = useState<string | undefined>(user?.image)
  const [oriBackground, setOriBackgound] = useState<string | undefined>(user?.background)
  
  const [previewProfile, setPreviewProfile] = useState<string | undefined>(user?.image)
  const [previewBackground, setPreviewBackground] = useState<string | undefined>(user?.background)

  const profileSrc = previewProfile === oriProfile ? oriProfile : previewProfile
  const backgroundSrc = previewBackground === oriBackground ? oriBackground : previewBackground

  const {
    register,
    handleSubmit,
    setValue, 
    reset,
    formState: {errors}
  } = useForm({
    resolver: zodResolver(EditProfileSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      bio: "",
    }
  })

  const handlerChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if(file){
      setPreviewProfile(URL.createObjectURL(file))
      setValue("profile", file, {shouldValidate: true})
    }
  }

  const handlerChangeBackground = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if(file){
      setPreviewBackground(URL.createObjectURL(file))
      setValue("backgound", file, {shouldValidate: true})
    }
  }

  const submit = (dataEdit: EditProfileDTO) => {
    const formData = new FormData()
    formData.append('name', dataEdit.name)
    formData.append('username', dataEdit.username)
    formData.append('bio', dataEdit.bio)
    if(dataEdit.profile) formData.append('profile', dataEdit.profile)
    if(dataEdit.backgound) formData.append('background', dataEdit.backgound)
    mutate(formData)
  }

  useEffect(() => {
    if(user){
      reset({
        name: user.name,
        username: user.username,
        bio: user.bio
      })
    }
    setOriProfile(user?.image)
    setPreviewProfile(user?.image)
    setOriBackgound(user?.background)
    setPreviewBackground(user?.background)
  }, [isOpen, user, reset])

  return(
    <Dialog open={isOpen} 
      onOpenChange={ (open) =>{
        setIsOpen(open)
        if(!open){
          reset({
            name: user?.name,
            username: user?.username,
            bio: user?.bio
          })
          setOriProfile(user?.image)
          setPreviewProfile(user?.image)
        }
    }}>
      <DialogTrigger asChild>
        <div className="flex justify-end -mt-7 mb-1 cursor-pointer">
          <button 
          onClick={() => setIsOpen(true)}
          className="border px-3 py-1 rounded-full font-bold text-sm"
          >
            Edit Profile</button>
          </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex justify-between">
            <DialogTitle className="text-white font-bold">Edit Profile</DialogTitle>
            <DialogClose onClick={() => setIsOpen(false)}>
              <CircleX className="text-white hover:text-red-800"/></DialogClose>
            </div>  
          </DialogHeader>

        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col w-full">
            <label
              htmlFor="Background" 
              className="relative group block w-full max-h-51 overflow-hidden rounded-md">
              <img src={ backgroundSrc||BackgoundProfile} className="rounded-md"/>
              <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ">
                <ImagePlus className="text-white size-7"/>
                </div>
              </label>
            <input id="Background" type="file" className="hidden" onChange={handlerChangeBackground}/>
          </div>
          <div className="-mt-17 ml-7 mb-2 flex items-end gap-2"> 
            <label 
              htmlFor="Profile" 
              className="relative group cursor-pointer w-fit block"
              > 
              <Avatar 
                className="size-35 object-cover"
                > 
                <AvatarImage src={profileSrc} />
                <AvatarFallback className="text-[var(--primary-color)] text-2xl font-bold">
                  {user?.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImagePlus className="text-white"/>
                  </div>
              </label>
            <input id="Profile" type="file" className="hidden" onChange={handlerChangeProfile}/>              
          </div>
          
          <div className="space-y-2 border-b-1 border-[#3F3F3F] pb-2 mb-2">
            <div>
              <input type="text" placeholder="Name" {...register("name")}
              className={inputStyles}/>
              {errors.name && <p>{errors.name.message}</p>}
              </div>
            <input type="text" placeholder="Username" {...register("username")}
            className={inputStyles}/>
            <textarea placeholder="Bio" {...register("bio")}
            className={textareaStyles}/>
            </div>
          <div className="flex justify-end">
            
            <button
              type="submit"
              className="
            text-white font-bold
              bg-[var(--primary-color)] hover:bg-[var(--hover-color)]
              py-1 px-3
              rounded-sm
            ">{isPending ? 
            <BeatLoader color="white" size={5}
            /> :
              "save"
            }
              </button>
            
            </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}