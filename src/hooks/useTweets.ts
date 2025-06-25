import { tweetDTO } from "@/types/PostTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useTweets(tweetId: number) {
  const { data, isLoading } = useQuery({
    queryKey: ["tweet", tweetId],
    queryFn: getTweets,
  });
  return { data, isLoading };
}

async function getTweets({ queryKey }: { queryKey: [string, number] }) {
  const [, tweetId] = queryKey;
  const res = await api.get<tweetDTO>(`/tweet/${tweetId}`);
  return res.data;
}
