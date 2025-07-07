import { IsLikesDTO } from "@/types/PostTypes";
import { Response } from "@/types/ResponseType";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useCheckTweetLiked(tweetId: number) {
  const { data: TweetIsLiked, isLoading } = useQuery({
    queryKey: ["TweetIsLiked", tweetId],
    queryFn: checkTweetLiked,
  });

  return { TweetIsLiked, isLoading };
}
async function checkTweetLiked({ queryKey }: { queryKey: [string, number] }) {
  const [, tweetId] = queryKey;

  const res = await api.get<Response<{ isLiked: boolean; countlikes: number }>>(
    `/isliked-tweet/${tweetId}`
  );
  return res.data.data;
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
