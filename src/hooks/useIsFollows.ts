import { Response } from "@/types/ResponseType";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useIsFollow(targetId: string) {
  const { data: checked, isLoading } = useQuery({
    queryKey: ["isFollowed", targetId],
    queryFn: checkFollow,
  });

  return { checked, isLoading };
}

async function checkFollow({ queryKey }: { queryKey: [string, string] }) {
  const [, targetId] = queryKey;

  const res = await api.get<Response<boolean>>(`/isfollowed/${targetId}`);
  return res.data.data;
}
