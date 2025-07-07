import {
  ResetPasswordDataRes,
  ResetPasswordDTO,
  ResetPasswordErrRes,
} from "@/features/auth/Reset/ResetTypes";
import { Response } from "@/types/ResponseType";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useReset() {
  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      token,
      data,
    }: {
      token: string;
      data: ResetPasswordDTO;
    }) => {
      const res = await api.patch<Response<ResetPasswordDataRes>>(
        `/reset/${token}`,
        data
      );
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const ErrRes = error.response?.data as Response<ResetPasswordErrRes>;
        toast.error(ErrRes.data.message);
      } else {
        console.error("Unexpected Error");
      }
    },
  });

  return {
    mutate,
    isPending,
  };
}
