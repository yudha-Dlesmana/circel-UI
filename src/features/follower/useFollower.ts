import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useFollower() {
  const {
    data: followers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["follower"],
    queryFn: async () => {
      const res = await api.get("/followers");
      return res.data;
    },
  });

  return { followers, isLoading, error };
}
