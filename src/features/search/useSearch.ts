import { otherUserType } from "@/types/UserTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useSearch(name: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["search", name],
    queryFn: search,
  });
  return { data, isLoading, error };
}

async function search({ queryKey }: { queryKey: [string, string] }) {
  const [, name] = queryKey;
  const res = await api.get<otherUserType[]>("/search-user", {
    params: {
      name,
    },
  });
  return res.data;
}
