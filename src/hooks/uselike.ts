import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useLike() {
  const queryClient = useQueryClient();
  const { mutate: likeTweet } = useMutation({
    mutationFn: async ({ tweetId }: { tweetId: number }) => {
      const res = await api.post(`like?tweetId=${tweetId}`);
      return res.data;
    },
    onSuccess: () => {
      toast.success("liked");
      queryClient.invalidateQueries({ queryKey: ["feeds"] });
      queryClient.invalidateQueries({ queryKey: ["isLiked"] });
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
