type UserType = {
  username: string;
  email: string;
  name: string;
  bio: string;
  image: string;
  follower: number;
  following: number;
};

type otherUserType = {
  username: string;
  name: string;
  image: string;
};

export type { UserType, otherUserType };
