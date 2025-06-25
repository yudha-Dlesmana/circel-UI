import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useUnlike(tweetId: number) {
  const queryClient = useQueryClient();
  const { mutate: unlike } = useMutation({
    mutationFn: async () => {
      await api.delete("/unlike", {
        params: { tweetId },
      });
    },
    onSuccess: () => {
      toast.success("remove like");
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
  return { unlike };
}
