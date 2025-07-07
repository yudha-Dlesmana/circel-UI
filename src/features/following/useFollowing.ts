import { Response } from "@/types/ResponseType";
import { Followings } from "./FollowingTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useFollowing() {
  const {
    data: followings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["following"],
    queryFn: async () => {
      const res = await api.get<Response<Followings[]>>("/following");
      return res.data.data;
    },
  });
  return { followings, isLoading, error };
}
