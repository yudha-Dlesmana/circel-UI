import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { PostTweetFormData } from "./TweetsTypes";

export function usePostTweets(onSuccessCallback: () => void) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: PostTweetFormData) => {
      await api.post("/tweets", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Tweets"] });
      onSuccessCallback();
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message;
        toast.error(message);
      }

      console.error(error);
    },
  });

  return { mutate, isPending };
}
