import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Cookies from "cookies-js";
import { RegisterDataRes, RegisterDTO } from "./RegisterTypes";
import { Response } from "@/types/ResponseType";
import { useNavigate } from "react-router";

export function useRegister() {
  const navigate = useNavigate();
  const {
    mutate,
    data: registered,
    isPending,
  } = useMutation({
    mutationFn: async (data: RegisterDTO) => {
      const res = await api.post<Response<RegisterDataRes>>("/register", data);
      return res.data;
    },
    onSuccess: (data) => {
      Cookies.set("access-token", data.data.token);
      navigate("/");
      toast.success(data.message);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return {
    mutate,
    registered,
    isPending,
  };
}
