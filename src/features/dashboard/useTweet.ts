import { Response } from "@/types/ResponseType";
import { TweetsPayload } from "./Type/TweetsTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useTweets() {
  const {
    data: TweetsPayload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Tweets"],
    queryFn: async () => {
      const res = await api.get<Response<TweetsPayload>>("/tweets");
      return res.data.data;
    },
  });
  return { TweetsPayload, isLoading, error };
}
