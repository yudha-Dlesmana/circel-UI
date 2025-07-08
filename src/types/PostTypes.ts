export type PostDTO = {
  id: number;
  text: string;
  image?: string;
  createAt: Date;
  username: string;
  name: string;
  userImage?: string;
  likes: number;
  comments: number;
}; // ganti jadi tweets
export type RepliesDTO = {
  id: number;
  text: string;
  image?: string;
  createAt: Date;
  username: string;
  name: string;
  userImage?: string;
  like: number;
  replies: number;
};
export type IsLikesDTO = {
  isLiked: boolean;
  countlikes: number;
};
