import { RepliesDTO } from "@/types/PostTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useReplies(parentId: number) {
  const {
    data: replies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["replies", parentId],
    queryFn: getComment,
  });
  return { replies, isLoading, error };
}

async function getComment({ queryKey }: { queryKey: [string, number] }) {
  const [, parentId] = queryKey;

  const res = await api.get<RepliesDTO[]>(`/replies/${parentId}`);
  return res.data;
}
