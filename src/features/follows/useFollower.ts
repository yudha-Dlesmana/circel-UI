import { otherUserType } from "@/types/UserTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useFollower() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["follower"],
    queryFn: async () => {
      const res = await api.get<otherUserType[]>("/followers");
      return res.data;
    },
  });

  return { data, isLoading, error };
}
