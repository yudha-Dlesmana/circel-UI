import { LoginFormDTO } from "@/types/AuthTypes";
import { api } from "@/utils/Apis";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Cookie from "cookies-js";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: LoginFormDTO) => {
      const res = await api.post("/login", data);

      const token = res.data.token;
      return token;
    },
    onSuccess: (data) => {
      Cookie.set("access-token", data);
      navigate("/");
      toast.success(`welcome ${data}`);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || "Unknown Error";

        toast.error(message);
      } else {
        console.error("Unexpected Error: ", error);
      }
    },
  });

  return {
    mutate,
    isPending,
  };
}
