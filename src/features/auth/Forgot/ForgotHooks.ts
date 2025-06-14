import { ForgotFormDTO } from "@/types/AuthTypes";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useForgot() {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ForgotFormDTO) => {
      const res = await api.post("/forgot-password", data);
      return res.data.message;
    },
    onSuccess: () => {
      toast.success("Your password reset link has been sent.");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data.message || error.message || "Unknown Error";
        toast.error(message);
      } else {
        console.error("Unexpected Error:", error);
      }
    },
  });
  return { mutate, isPending };
}
