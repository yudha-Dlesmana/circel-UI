import { Response } from "@/types/ResponseType";
import { Tweet } from "./TweetTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useTweets(tweetId: number) {
  const {
    data: tweet,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tweet", tweetId],
    queryFn: getTweets,
  });
  return { tweet, isLoading, error };
}

async function getTweets({ queryKey }: { queryKey: [string, number] }) {
  const [, tweetId] = queryKey;
  const res = await api.get<Response<Tweet>>(`/tweet/${tweetId}`);
  return res.data.data;
}
