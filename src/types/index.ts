export type UserT = {
  id: string;
  name: string;
  surname?: string;
  image?: string;
};

export type MessageT = {
  id: number;
  replyTo: number;
  author: string;
  message: string;
  timestamp: number;
};

export type MessageBodyT = {
  author: string;
  message: string;
};
