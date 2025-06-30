import { PostRepliesType } from "@/types/PostTypes";
import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function usePostReplies(
  tweetId: number,
  parentId: number,
  onSuccessCallback: () => void
) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: PostRepliesType) => {
      await api.post(`/replies/${tweetId}/${parentId}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["replies"] });
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
