import { Response } from "@/types/ResponseType";
import { api } from "@/utils/Apis";
import {
  InfiniteData,
  QueryFunctionContext,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { TweetsResData } from "./TweetType";

export function useUserTweets(username: string) {
  const {
    data: infiniteData,
    isLoading,
    error,
  } = useInfiniteQuery<
    TweetsResData,
    Error,
    InfiniteData<TweetsResData>,
    [string, string],
    number | undefined
  >({
    queryKey: ["UserTweet", username],
    queryFn: getUserTweet,
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.cursor ?? undefined,
    enabled: !!username,
  });

  const UserTweets = infiniteData?.pages.flatMap((p) => p.tweets) ?? [];

  return { UserTweets, isLoading, error };
}

async function getUserTweet({
  queryKey,
  pageParam,
}: QueryFunctionContext<[string, string], number | undefined>) {
  const [, userId] = queryKey;
  const cursor = pageParam;

  const res = await api.get<Response<TweetsResData>>(`/tweets/${userId}`, {
    params: { cursor },
  });

  return res.data.data;
}
