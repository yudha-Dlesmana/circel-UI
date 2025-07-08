import { Response } from "@/types/ResponseType";
import { UserDataRes } from "./UserTypes";
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

  const res = await api.get<Response<UserDataRes>>(`/user/${username}`);
  return res.data.data;
}
