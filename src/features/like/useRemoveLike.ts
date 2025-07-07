import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useRemoveLikeTweet(tweetId: number) {
  const queryClient = useQueryClient();
  const { mutate: removeTweetLike } = useMutation({
    mutationFn: async () => {
      await api.delete(`/remove-like-tweet/${tweetId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["TweetIsLiked", tweetId] });
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
  return { removeTweetLike };
}

export function useRemoveLikeComment(commentId: number) {
  const queryClient = useQueryClient();
  const { mutate: removeCommentLike } = useMutation({
    mutationFn: async () => {
      await api.delete(`/remove-like-comment/${commentId}`);
    },
    onSuccess: () => {
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
  return { removeCommentLike };
}
