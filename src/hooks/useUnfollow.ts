import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useUnfollow() {
  const queryClient = useQueryClient();
  const { mutate: unfollowUser, isPending } = useMutation({
    mutationFn: async ({ targetUsername }: { targetUsername: string }) => {
      await api.delete(`/unfollow/${targetUsername}`);
    },
    onSuccess: () => {
      toast.success(`unfollowing user`);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["following"] });
      queryClient.invalidateQueries({ queryKey: ["isFollowed"] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message;
        toast.error(message);
      } else {
        console.error(error);
      }
    },
  });

  return { unfollowUser, isPending };
}
