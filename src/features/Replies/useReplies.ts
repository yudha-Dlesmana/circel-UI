import { api } from "@/utils/Apis";
import {
  InfiniteData,
  QueryFunctionContext,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { RepliesResData } from "./RepliesTypes";
import { Response } from "@/types/ResponseType";

export function useReplies(parentId: number) {
  const {
    data: infiniteData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery<
    RepliesResData,
    Error,
    InfiniteData<RepliesResData>,
    [string, number],
    number | undefined
  >({
    queryKey: ["replies", parentId],
    queryFn: getReplies,
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.cursor ?? undefined,
  });
  const replies = infiniteData?.pages.flatMap((p) => p.replies) ?? [];

  return { replies, isLoading, fetchNextPage, hasNextPage, error };
}

async function getReplies({
  queryKey,
  pageParam,
}: QueryFunctionContext<[string, number], number | undefined>) {
  const [, parentId] = queryKey;
  const cursor = pageParam;

  const res = await api.get<Response<RepliesResData>>(`/replies/${parentId}`, {
    params: { cursor },
  });
  return res.data.data;
}
