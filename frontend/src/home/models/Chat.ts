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

export type Message = {
  Id?: string;
  type: MessageType;
  from: number;
  to: number;
  content: string;
};

export type Messages = Array<Message>;

// type InboundMessage struct {
// 	Type    string `json:"type"`
// 	From    int64  `json:"from"`
// 	To      int64  `json:"to"`
// 	Content string `json:"content"`
// }

export type ChatHistory = Array<ChatHistoryItem>;

// {
//   "conversationId": "1#23",
//   "timestamp": "2025-02-22T11:46:40Z",
//   "messageId": "01JMPQP98CYBPPJC8JT9NP8YQE",
//   "senderId": 1,
//   "receiverId": 23,
//   "content": "hello",
//   "messageType": "TEXT",
//   "status": 1
// },
