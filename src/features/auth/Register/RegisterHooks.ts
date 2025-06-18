import { RegisterFormDTO } from "@/types/AuthTypes";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Cookies from "cookies-js";

export function useRegister() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: RegisterFormDTO) => {
      const res = await api.post("/register", data);
      return res.data.token;
    },
    onSuccess: (token) => {
      Cookies.set("access-token", token);
      navigate("/register/profile");
      toast.success(`your account has created`);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message;
        toast.error(message);
      } else {
        console.error(error);
      }
    },
  });
  return {
    mutate,
    isPending,
  };
}
