import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { RegisterProfileFormData } from "./RegisterProfileTypes";
import { Response } from "@/types/ResponseType";
import { RegisterDataRes } from "../Register/RegisterTypes";

export function useRegisterProfile() {
  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      formData,
    }: {
      token: string;
      formData: RegisterProfileFormData;
    }) => {
      const res = await api.post<Response<RegisterDataRes>>(
        `/profile`,
        formData
      );
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return { mutate, isPending };
}
