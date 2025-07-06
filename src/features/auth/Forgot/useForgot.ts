import { ForgotDTO, ForgotErrData } from "@/types/Auth/ForgotTypes";
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
      const res = await api.post<Response<unknown>>("/forgot-password", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const resData = error.response?.data as Response<ForgotErrData>;
        toast.error(resData.data.message);
      } else {
        console.error("Unexpected Error:", error);
      }
    },
  });
  return { mutate, resetLink, isPending };
}
