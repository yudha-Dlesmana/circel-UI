import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useEditProfile() {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await api.patch("/profile", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success(`your profile updated`);
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
