import { PostDTO } from "@/types/PostTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useFeeds() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["feeds"],
    queryFn: async () => {
      const res = await api.get<PostDTO[]>("/feeds");
      console.log(res.data);
      return res.data;
    },
  });
  return { data, isLoading, error };
}
