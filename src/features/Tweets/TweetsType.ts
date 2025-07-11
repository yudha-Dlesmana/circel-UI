export type TweetsPayload = {
  tweets: {
    id: number;
    text: string;
    image: string;
    createAt: Date;
    username: string;
    name: string;
    userImage: string;
    comments: string;
  }[];
  cursor: number | undefined;
};
