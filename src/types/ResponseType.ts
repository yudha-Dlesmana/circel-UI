export type Response<T> = {
  status: Status;
  code: number;
  message: string;
  data: T;
};
export enum Status {
  SUCCESS = "success",
  ERROR = "error",
}
