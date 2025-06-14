import { RegisterFormDTO } from "@/types/AuthTypes";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useRegister() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: RegisterFormDTO) => {
      const res = await api.post("/register", data);
      return res.data.user;
    },
    onSuccess: () => {
      navigate("/login");
      toast.success(`your account has created`);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message;
        toast.error(message);
      } else {
        console.error("Unexpected Error: ", error);
      }
    },
  });
  return {
    mutate,
    isPending,
  };
}
