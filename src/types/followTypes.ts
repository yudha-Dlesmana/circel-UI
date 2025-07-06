interface CreateFollowType {
  followingId: string;
  followerId: string;
}

interface FollowType {
  username: string;
}

export type { CreateFollowType, FollowType };
