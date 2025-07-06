import { otherUserType } from "@/types/UserTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useFollowing() {
  const { data, isLoading } = useQuery({
    queryKey: ["following"],
    queryFn: async () => {
      const res = await api.get<otherUserType[]>("/following");
      return res.data;
    },
  });
  return { data, isLoading };
}
