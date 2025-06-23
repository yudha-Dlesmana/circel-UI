import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useFollowCheck(targetUsername: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["isFollowed", targetUsername],
    queryFn: checkFollow,
  });

  return { data, isLoading };
}

async function checkFollow({ queryKey }: { queryKey: [string, string] }) {
  const [, targetUsername] = queryKey;

  const res = await api.get<boolean>(`/isFollowed/${targetUsername}`);
  return res.data;
}
