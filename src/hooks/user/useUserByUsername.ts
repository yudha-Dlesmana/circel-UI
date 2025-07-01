import { UserType } from "@/types/UserTypes";
import { api } from "@/utils/Apis";
import { useQuery } from "@tanstack/react-query";

export function useUserByUsername(username: string) {
  const {
    data: UserByUsername,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["UserByUsername", username],
    queryFn: getUserByUsername,
  });
  return { UserByUsername, isLoading, error };
}

async function getUserByUsername({ queryKey }: { queryKey: [string, string] }) {
  const [, username] = queryKey;

  const res = await api.get<UserType>(`/user/${username}`);
  return res.data;
}
