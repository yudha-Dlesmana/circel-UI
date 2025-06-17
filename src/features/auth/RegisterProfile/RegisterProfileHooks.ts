import { RegisterProfileFormData } from "@/types/ProfileTypes";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useRegisterProfile() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: RegisterProfileFormData) => {
      const res = await api.post("/profile", formData);

      return res.data.message;
    },
    onSuccess: () => {
      toast.success("Profile Created");
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
  return { mutate, isPending };
}
