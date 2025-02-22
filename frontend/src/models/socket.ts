import { MessageType } from '../home/models/Chat';

export type OutboundMessage = {
  type: MessageType;
  from: number;
  to: number;
  content: string;
};

export type InboundMessage = {
  type: MessageType;
  from: number;
  to: number;
  content: string;
  time: string;
};
