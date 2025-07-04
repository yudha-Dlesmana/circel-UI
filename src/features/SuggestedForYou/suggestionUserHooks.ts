import { otherUserType } from "@/types/UserTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useSuggestion() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["suggestion"],
    queryFn: async () => {
      const res = await api.get<otherUserType[]>("/suggestion");
      return res.data;
    },
  });
  return { data, isLoading, isError };
}
