import { Response } from "@/types/ResponseType";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";
import { suggestionDataRes } from "./SuggestionTypes";

export function useSuggestion() {
  const {
    data: suggestion,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["suggestion"],
    queryFn: async () => {
      const res = await api.get<Response<suggestionDataRes[]>>("/suggestion");
      return res.data.data;
    },
  });
  return { suggestion, isLoading, isError };
}
