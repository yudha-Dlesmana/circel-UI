import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useLike(tweetId: number) {
  const queryClient = useQueryClient();
  const { mutate: likeTweet } = useMutation({
    mutationFn: async () => {
      const res = await api.post(`/like-tweet/${tweetId}`);
      return res.data;
    },
    onSuccess: () => {
      toast.success("liked");
      queryClient.invalidateQueries({ queryKey: ["isLiked", tweetId] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message;
        toast.error(message);
      } else {
        console.error(error.stack);
      }
    },
  });
  return { likeTweet };
}
