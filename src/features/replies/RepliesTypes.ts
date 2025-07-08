export type RepliesResData = {
  replies: reply[];
  cursor: number | undefined;
};
export type reply = {
  id: number;
  username: string;
  name: string;
  userImage: string;
  text: string;
  createAt: Date;
};
