import { PostDTO } from "@/types/PostTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useUserTweets(username: string) {
  const {
    data: TweetUser,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["UserTweet", username],
    queryFn: getUserTweet,
    enabled: !!username,
  });
  return { TweetUser, isLoading, error };
}

async function getUserTweet({ queryKey }: { queryKey: [string, string] }) {
  const [, username] = queryKey;

  const res = await api.get<PostDTO[]>(`/tweets/${username}`);
  return res.data;
}
