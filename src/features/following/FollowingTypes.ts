export type Followings = {
  following: [
    {
      id: string;
      username: string;
      name: string;
      image: string;
      bio: string;
    }
  ];
  cursor: string;
};
