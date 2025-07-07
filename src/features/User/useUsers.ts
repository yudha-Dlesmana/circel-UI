import { Response } from "@/types/ResponseType";

import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";
import { UserDataRes } from "./UserTypes";

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await api.get<Response<UserDataRes>>("/user");
      return res.data.data;
    },
  });
  return { user, isLoading, error };
}
