import { RepliesDTO } from "@/types/PostTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useComments(tweetId: number) {
  const {
    data: comment,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["comment", tweetId],
    queryFn: getComment,
  });
  return { comment, isLoading, error };
}

async function getComment({ queryKey }: { queryKey: [string, number] }) {
  const [, tweetId] = queryKey;

  const res = await api.get<RepliesDTO[]>(`/comment/${tweetId}`);
  return res.data;
}
