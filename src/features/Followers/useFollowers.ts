import { Response } from "@/types/ResponseType";
import { api } from "@/utils/Apis";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FollowersPayload } from "./FollowerTypes";

export function useFollower() {
  const {
    data: followers,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["follower"],
    queryFn: fetchFollowers,
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.cursor || undefined,
  });

  return {
    followers,
    isLoading,
    hasNextPage,
    fetchNextPage,
    error,
  };
}
async function fetchFollowers({ pageParam = "" }) {
  const res = await api.get<Response<FollowersPayload>>("/followers", {
    params: pageParam ? { cursor: pageParam } : {},
  });
  return res.data.data;
}
