import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";
import { SearchUser } from "./SearchUserTypes";
import { Response } from "@/types/ResponseType";

export function useSearch(name: string) {
  const {
    data: search,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["search", name],
    queryFn: searching,
  });
  return { search, isLoading, error };
}

async function searching({ queryKey }: { queryKey: [string, string] }) {
  const [, name] = queryKey;
  const res = await api.get<Response<SearchUser[]>>("/search", {
    params: {
      name,
    },
  });
  return res.data.data;
}
