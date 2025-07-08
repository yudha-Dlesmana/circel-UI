export type CommentResData = {
  comments: comment[];
  cursor: number | undefined;
};

export type comment = {
  id: number;
  name: string;
  username: string;
  userImage: string;
  text: string;
  image: string;
  createAt: Date;
  replies: number;
};
