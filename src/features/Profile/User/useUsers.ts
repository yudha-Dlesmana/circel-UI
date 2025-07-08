import { Response } from "@/types/ResponseType";
import { UserDataRes } from "./UserTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const {
    data: AuthUser,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await api.get<Response<UserDataRes>>("/user");
      return res.data.data;
    },
  });
  return { AuthUser, isLoading, error };
}
