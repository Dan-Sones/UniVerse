import { ChatHistory, ChatRecepient } from '../../home/models/Chat';
import ChatService from '../services/ChatService';

export default class ChatQueryMethods {
  public static readonly ChatRecepient = async (
    query: string
  ): Promise<ChatRecepient[]> => {
    const response = await ChatService.ChatRecepient(query);

    return response;
  };
  public static readonly getChatHistory = async (
    userId: number
  ): Promise<ChatHistory> => {
    const response = await ChatService.getChatHistory(userId);

    return response;
  };
}
