import {
  LoginDTO,
  LoginDataRes,
  LoginErrRes,
} from "@/features/auth/Login/LoginTypes";
import { Response } from "@/types/ResponseType";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import Cookie from "cookies-js";

export function useLogin() {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: LoginDTO) => {
      const res = await api.post<Response<LoginDataRes>>("/login", data);
      return res.data;
    },
    onSuccess: (data) => {
      Cookie.set("access-token", data.data.token);
      toast.success(`${data.message}`);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const errData = error.response?.data as Response<LoginErrRes>;
        toast.error(errData.data.message);
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
