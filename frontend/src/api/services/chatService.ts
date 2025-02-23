import { request } from '../axiosClient';
import { ChatEndpoints } from '../endpoints';
import { ChatHistory, ChatRecepient } from '../../home/models/Chat';

export default class ChatService {
  public static readonly ChatRecepient = (
    query: string
  ): Promise<ChatRecepient[]> => {
    return request({
      url: ChatEndpoints.searchUsers(),
      method: 'get',
      params: {
        q: query,
      },
    });
  };

  public static readonly getChatHistory = (
    userId: number
  ): Promise<ChatHistory> => {
    return request({
      url: ChatEndpoints.getChatHistory(userId),
      method: 'get',
    });
  };
}
