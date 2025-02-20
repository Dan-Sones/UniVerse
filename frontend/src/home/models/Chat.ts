export type ChatMessage = {
  message: string;
  isSent: boolean;
};

export type ChatType = {
  messages: Array<ChatMessage>;
  recepient: ChatRecepient;
};

export type ChatRecepient = {
  username: string;
  profilePictureUrl: string;
  id: number;
};

export type ChatPreview = {
  recepient: ChatRecepient;
  recentMessage: RecentMessage;
};

export type RecentMessage = {
  message: string;
  timestamp: string;
};

export type SearchUser = {
  id: number;
  username: string;
  profilePictureUrl: string;
};
