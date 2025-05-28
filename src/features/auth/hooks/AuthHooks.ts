import { useAuthContext } from "@/contexts/AuthContext";
import { ForgotFormDTO, LoginFormDTO, RegisterFormDTO, ResetFormDTO } from "@/types/AuthTypes";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useAuth(){
  const navigate = useNavigate();
  const {logIn} = useAuthContext();

  const loginAccount = useMutation({
    mutationFn: async (data: LoginFormDTO) => {
      const res = await api.post('/login', data )

      const token = res.data.token
      return token
    },
    onSuccess: (data) => {
      logIn(data);
      navigate('/')
      toast.success("welcome")
    },
    onError: (error) => {
      if(axios.isAxiosError(error)){
        const message = 
        error.response?.data.message ||
        "Unknown Error"
        
        toast.error(message)
      } else {
        console.error("Unexpected Error: ", error)
      } 
    }
  }) 

  const registerAccount = useMutation({
    mutationFn: async (data: RegisterFormDTO) => {
      const res = await api.post('/register', data)
      return res.data.user
    },
    onSuccess: () => {
      navigate('/login')
      toast.success(`your account has created`)
    },
    onError: (error) =>{
      if(axios.isAxiosError(error)){
        const message = error.response?.data.message
        toast.error(message)
      } else {
        console.error("Unexpected Error: ", error)
      }
    }
  })

  const forgotPassword = useMutation({
    mutationFn: async (data: ForgotFormDTO) => {
      const res = await api.post('/forgot-password', data)
      return res.data.message
    },
    onSuccess: () => {
      toast.success("Your password reset link has been sent.")
    },
    onError: (error) => {
      if(axios.isAxiosError(error)){
        const message = 
          error.response?.data.message ||
          error.message || "Unknown Error"
        toast.error(message)
      } else {
        console.error("Unexpected Error:", error)
      }
    }
  })

  const resetPassword = useMutation({
    mutationFn: async ({token, data}: {token: string, data: ResetFormDTO}) => {
      const res = await api.patch(`/reset-password?token=${token}`, data)
      return res.data.message
    },
    onSuccess: (data) => {
      toast.success(data)
      navigate('/login')
    },
    onError: (error) => {
      if(axios.isAxiosError(error)){
        const message = error.response?.data.message ||
        error.message

        toast.error(message)
      } else {
        console.error('Unexpected Error')
      }
    }
  })

  return {
    loginAccount,
    registerAccount,
    resetPassword,
    forgotPassword
  }
}