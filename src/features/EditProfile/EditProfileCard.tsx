import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import BackgoundProfile from '@/assets/BackgoundProfile.png'
import { useEffect, useState } from "react";
import { useUser } from "@/hooks/user/useUsers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditProfileDTO, EditProfileSchema} from "@/types/ProfileTypes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CircleX, ImagePlus, Trash2 } from "lucide-react";
import { inputStyles, textareaStyles } from "@/features/auth/FormStyles";
import { History } from "lucide-react";
import { useEditProfile } from "./EditProfileHooks";

export function EditProfileCard(){
  const {user} = useUser()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const {mutate, isPending} = useEditProfile( () =>  setIsOpen(false))

  const [oriImage, setOriImage] = useState<string | undefined>(user?.image)
  
  const [previewEdit, setPreviewEdit] = useState<string | undefined>(user?.image)


  const imageSrc = previewEdit === oriImage ? oriImage : previewEdit

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

  const handlerChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if(file){
      setPreviewEdit(URL.createObjectURL(file))
      setValue("image", file, {shouldValidate: true})
    }
  }
  const handlerResetImage = () => {
    setPreviewEdit(oriImage)
    setValue('image', undefined)
  }
  const handlerDeleteImage = () => {
    setPreviewEdit(undefined)
    setOriImage(undefined)
    setValue("image", undefined)
  }

  const submit = (dataEdit: EditProfileDTO) => {
    const formData = new FormData()
    formData.append('name', dataEdit.name)
    formData.append('username', dataEdit.username)
    formData.append('bio', dataEdit.bio)
    if(dataEdit.image) formData.append('image', dataEdit.image)
    if( !previewEdit ){
      formData.append('deleteImage', "true")
    }
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
    setOriImage(user?.image)
    setPreviewEdit(user?.image)
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
          setOriImage(user?.image)
          setPreviewEdit(user?.image)
        }
    }}>
      <DialogTrigger asChild>
        <div className="flex justify-end -mt-7 mb-1">
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
          <div>
            <img src={BackgoundProfile} className="max-h-35 w-full rounded-md"/>
            <div className="-mt-17 ml-7 mb-2 flex items-end gap-2"> 
              <label 
                htmlFor="imageProfile" 
                className="relative group cursor-pointer w-fit block"
                > 
                <Avatar 
                  className="size-35 object-cover"
                  > 
                  <AvatarImage src={imageSrc} />
                  <AvatarFallback className="text-[var(--primary-color)] text-2xl font-bold">
                    {user?.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImagePlus className="text-white"/>
                    </div>
                </label>
              <div className="flex flex-col gap-4">
                {previewEdit !== oriImage &&
                  <History onClick={handlerResetImage} className="text-white cursor-pointer"/>
                }
                { (oriImage || previewEdit) && (
                <Trash2 onClick={handlerDeleteImage} className="text-red-700 cursor-pointer mt-"/>
                )}
                </div>
              <input id="imageProfile" type="file" className="hidden" onChange={handlerChangeImage}/>              
            </div>
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
            {isPending ? 
            <button
              disabled
              className="
            text-white font-bold
              bg-[var(--primary-color)] hover:bg-[var(--hover-color)]
              py-1 px-3
              rounded-sm
            ">
              update</button> :
            <button
              type="submit"
              className="
            text-white font-bold
              bg-[var(--primary-color)] hover:bg-[var(--hover-color)]
              py-1 px-3
              rounded-sm
            ">
              save</button>}
            
            </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}