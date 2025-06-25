import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useIsLiked(tweetId: number) {
  const { data, isLoading } = useQuery({
    queryKey: ["isLiked", tweetId],
    queryFn: checkLiked,
  });

  return { data, isLoading };
}

async function checkLiked({ queryKey }: { queryKey: [string, number] }) {
  const [, tweetId] = queryKey;

  const res = await api.get<boolean>(`/isliked`, { params: { tweetId } });
  return res.data;
}
