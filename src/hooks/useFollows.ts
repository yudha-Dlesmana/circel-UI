import { followTypes } from "@/types/followTypes";
import { api } from "@/utils/Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export function useFollow() {
  const queryClient = useQueryClient();
  const { mutate: followUser, isPending } = useMutation({
    mutationFn: async ({ targetUsername }: { targetUsername: string }) => {
      const res = await api.post<followTypes>(`/follow/${targetUsername}`);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(
        `${data.followerUsername} following ${data.followingUsername}`
      );
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
  return { followUser, isPending };
}
