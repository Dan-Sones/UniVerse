export type OutboundMessage = {
  type: string;
  from: number;
  to: number;
  content: string;
};

export type InboundMessage = {
  type: string;
  from: number;
  to: number;
  content: string;
  time: string;
};
