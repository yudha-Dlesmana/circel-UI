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

  const login = useMutation({
    mutationFn: async (data: LoginFormDTO) => {
      const res = await api.post('/login', data )
      return res.data
    },
    onSuccess: (data) => {
      logIn(data);
      navigate('/')
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

  const register = useMutation({
    mutationFn: async (data: RegisterFormDTO) => {
      await api.post('/register', data)
    },
    onSuccess: () => {

    }
  })

  const resetPassword = useMutation({
    mutationFn: async (data: ResetFormDTO) => {
      await api.patch('/reset-password', data)
    },
    onSuccess: ()=> {
      navigate('/login')
    }

  })

  const forgot = useMutation({
    mutationFn: async (data: ForgotFormDTO) => {
      await api.get('/user', {
        params: data
      })
    },
    onSuccess: () => {
      navigate('/login')
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

  return {
    login,
    register,
    resetPassword,
    forgot
  }
}