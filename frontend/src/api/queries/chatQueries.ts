import { SearchUser } from '../../home/models/Chat';
import ChatService from '../services/chatService';

export default class ChatQueryMethods {
  public static readonly searchUser = async (
    query: string
  ): Promise<SearchUser[]> => {
    const response = await ChatService.searchUser(query);

    return response;
  };
}
