import { Response } from "@/types/ResponseType";
import { FollowingsPayload } from "./FollowingTypes";
import { api } from "@/utils/Apis";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useFollowing() {
  const {
    data: followings,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["following"],
    queryFn: fetchFollowings,
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.cursor,
  });
  return {
    followings,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error,
  };
}

async function fetchFollowings({ pageParam = "" }) {
  const res = await api.get<Response<FollowingsPayload>>("/followings", {
    params: pageParam ? { cursor: pageParam } : {},
  });
  return res.data.data;
}
