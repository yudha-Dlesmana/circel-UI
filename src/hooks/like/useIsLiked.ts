import { IsLikesDTO } from "@/types/PostTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useIsLiked(tweetId: number) {
  const { data, isLoading } = useQuery({
    queryKey: ["isLiked", tweetId],
    queryFn: checkLiked,
  });

  return { data, isLoading };
}
async function checkLiked({ queryKey }: { queryKey: [string, number] }) {
  const [, tweetId] = queryKey;

  const res = await api.get<IsLikesDTO>(`/isliked-tweet/${tweetId}`);
  return res.data;
}

export function useCheckCommentLiked(commentId: number) {
  const { data: CommentIsLiked, isLoading } = useQuery({
    queryKey: ["CommentIsLiked", commentId],
    queryFn: checkCommentLiked,
  });

  return { CommentIsLiked, isLoading };
}
async function checkCommentLiked({ queryKey }: { queryKey: [string, number] }) {
  const [, commentId] = queryKey;

  const res = await api.get<IsLikesDTO>(`/isliked-comment/${commentId}`);
  return res.data;
}
