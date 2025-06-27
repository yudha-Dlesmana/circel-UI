import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useUnlike(tweetId: number) {
  const queryClient = useQueryClient();
  const { mutate: unlike } = useMutation({
    mutationFn: async () => {
      await api.delete(`/remove-like-tweet/${tweetId}`);
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

export function useRemoveLikeComment(commentId: number) {
  const queryClient = useQueryClient();
  const { mutate: removeLikeComment } = useMutation({
    mutationFn: async () => {
      await api.delete(`/remove-like-comment/${commentId}`);
    },
    onSuccess: () => {
      toast.success("remove like");
      queryClient.invalidateQueries({
        queryKey: ["CommentIsLiked", commentId],
      });
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
  return { removeLikeComment };
}
