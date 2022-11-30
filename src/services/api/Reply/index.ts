type ReReplyYn = 0 | 1;
type ISOString = string;
type ReplyId = string;

export type ReplyGetBody = {
  postId: string;
};
export type ReplyPostBody = {
  postId: string;
  author: number;
  parentId: number | null;
  reReplyYn: ReReplyYn;
};
export type ReplyDeleteBody = {
  id: number;
};
export type ReplyPutBody = {
  id: number;
};

type Reply = {
  id: number;
  author: string;
  content: string;
  likes: number;
  modifiedDate: ISOString;
  reReplyYn: ReReplyYn;
};
export type ReplyGetResponse = Reply[];
export type ReplyPostResponse = ReplyId;
export type ReplyDeleteResponse = ReplyId;
export type ReplyPutResponse = ReplyId;
