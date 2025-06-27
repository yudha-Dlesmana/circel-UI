import { RepliesDTO } from "@/types/PostTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useComments(tweetId: number) {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["comments", tweetId],
    queryFn: getComment,
  });
  return { comments, isLoading, error };
}

async function getComment({ queryKey }: { queryKey: [string, number] }) {
  const [, tweetId] = queryKey;

  const res = await api.get<RepliesDTO[]>(`/comment/${tweetId}`);
  return res.data;
}
