import { PostTweesFormData } from "@/types/PostTypes";
import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function usePostComment(tweetId: number, onSuccessCallback: () => void) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: PostTweesFormData) => {
      await api.post(`/comment/${tweetId}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
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
