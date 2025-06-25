import { EditProfileFormData } from "@/types/ProfileTypes";
import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useEditProfile(onClose: () => void) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: EditProfileFormData) => {
      const res = await api.patch("/profile", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success(`your profile updated`);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onClose();
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
