export type FollowersPayload = {
  followers: {
    id: string;
    username: string;
    name: string;
    image: string;
    bio: string;
  }[];
  cursor: string | null;
};
