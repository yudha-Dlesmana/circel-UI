export type FollowingsPayload = {
  followings: {
    id: string;
    username: string;
    name: string;
    image: string;
    bio: string;
  }[];
  cursor: string;
};
