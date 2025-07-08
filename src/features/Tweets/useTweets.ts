import { Response } from "@/types/ResponseType";
import { TweetsPayload } from "./TweetsType";
import { api } from "@/utils/Apis";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useTweetsInfinite() {
  const {
    data: InfiniteTweet,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["Tweets"],
    queryFn: async ({ pageParam }: { pageParam?: number }) => {
      const res = await api.get<Response<TweetsPayload>>("/tweets", {
        params: { cursor: pageParam },
      });
      return res.data.data;
    },
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor ?? undefined;
    },
  });
  return { InfiniteTweet, isLoading, error, fetchNextPage, hasNextPage };
}
