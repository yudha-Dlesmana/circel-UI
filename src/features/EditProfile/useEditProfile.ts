import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { EditProfileFormData } from "./EditProfileType";

export function useEditProfile(onClose: () => void) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: EditProfileFormData) => {
      const res = await api.patch("/profile", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success(`your profile updated`);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["feeds"] });
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
