import { api } from "@/utils/Apis";
import {
  InfiniteData,
  QueryFunctionContext,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { CommentResData } from "./CommentTypes";
import { Response } from "@/types/ResponseType";

export function useComments(tweetId: number) {
  const {
    data: infiniteData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery<
    CommentResData,
    Error,
    InfiniteData<CommentResData>,
    [string, number],
    number | undefined
  >({
    queryKey: ["Comments", tweetId],
    queryFn: getComment,
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.cursor ?? undefined,
  });

  const comments = infiniteData?.pages.flatMap((p) => p.comments) ?? [];

  return { comments, isLoading, fetchNextPage, hasNextPage, error };
}

async function getComment({
  queryKey,
  pageParam,
}: QueryFunctionContext<[string, number], number | undefined>) {
  const [, tweetId] = queryKey;
  const cursor = pageParam;

  const res = await api.get<Response<CommentResData>>(`/comments/${tweetId}`, {
    params: { cursor },
  });
  return res.data.data;
}
