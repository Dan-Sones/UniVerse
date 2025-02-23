export type ChatType = {
  messages: Messages;
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

export enum MessageType {
  TEXT = 'TEXT',
  //TODO: Include Image here
}

export type ChatHistoryItem = {
  conversationId: string;
  messageId: string;
  timestamp: string;
  senderId: number;
  recieverId: number;
  content: string;
  messageType: MessageType;
  status: number;
};

export type ChatHistory = Array<ChatHistoryItem>;

export type Message = {
  Id?: string;
  type: MessageType;
  from: number;
  to: number;
  content: string;
};

export type Messages = Array<Message>;
