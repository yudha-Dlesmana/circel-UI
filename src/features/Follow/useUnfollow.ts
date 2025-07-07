import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useUnfollow() {
  const queryClient = useQueryClient();
  const { mutate: unfollowUser, isPending } = useMutation({
    mutationFn: async ({ targetId }: { targetId: string }) => {
      await api.delete(`/unfollow/${targetId}`);
    },
    onSuccess: () => {
      toast.success(`unfollowing user`);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["following"] });
      queryClient.invalidateQueries({ queryKey: ["isfollowed"] });
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
