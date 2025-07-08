import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { PostCommentFormData } from "./PostCommentType";

export function usePostComment(tweetId: number, onSuccessCallback: () => void) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: PostCommentFormData) => {
      await api.post(`/comment/${tweetId}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Comments"] });
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
