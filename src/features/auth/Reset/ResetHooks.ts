import { ResetFormDTO } from "@/types/AuthTypes";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useAuth() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      token,
      data,
    }: {
      token: string;
      data: ResetFormDTO;
    }) => {
      const res = await api.patch(`/reset-password?token=${token}`, data);
      return res.data.message;
    },
    onSuccess: (data) => {
      toast.success(data);
      navigate("/login");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || error.message;

        toast.error(message);
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
