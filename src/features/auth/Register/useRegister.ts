import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Cookies from "cookies-js";
import { RegisterDataRes, RegisterDTO } from "./RegisterTypes";
import { Response } from "@/types/ResponseType";

export function useRegister() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: RegisterDTO) => {
      const res = await api.post<Response<RegisterDataRes>>("/register", data);
      return res.data;
    },
    onSuccess: (data) => {
      Cookies.set("access-token", data.data.token);
      navigate(`/profile/${data.data.token}`);
      toast.success(data.message);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return {
    mutate,
    isPending,
  };
}
