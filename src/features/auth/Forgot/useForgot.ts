import {
  ForgotDataRes,
  ForgotDTO,
  ForgotErrRes,
} from "@/features/auth/Forgot/ForgotTypes";
import { Response } from "@/types/ResponseType";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useForgot() {
  const {
    mutate,
    data: resetLink,
    isPending,
  } = useMutation({
    mutationFn: async (data: ForgotDTO) => {
      const res = await api.post<Response<ForgotDataRes>>("/forgot", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const errData = error.response?.data as Response<ForgotErrRes>;
        toast.error(errData.data.message);
      } else {
        console.error("Unexpected Error:", error);
      }
    },
  });
  return { mutate, resetLink, isPending };
}
