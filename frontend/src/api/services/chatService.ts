import { request } from '../axiosClient';
import { ChatEndpoints } from '../endpoints';
import { SearchUser } from '../../home/models/Chat';

export default class ChatService {
  public static readonly searchUser = (
    query: string
  ): Promise<SearchUser[]> => {
    return request({
      url: ChatEndpoints.searchUsers(),
      method: 'get',
      params: {
        q: query,
      },
    });
  };
}
