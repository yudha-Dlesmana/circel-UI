import { UserType } from "@/types/UserTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get<UserType>("/user");
      return res.data;
    },
  });
  return { data, isLoading, error };
}
