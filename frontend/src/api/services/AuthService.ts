import { LoginPayload } from '../../models/login';
import { User } from '../../models/user';
import { request } from '../axiosClient';
import { AuthEndpoints } from '../endpoints';

export default class AuthService {
  public static readonly checkAuth = (): Promise<User> => {
    return request({
      url: AuthEndpoints.checkAuth(),
      method: 'get',
    });
  };
  public static readonly login = (payload: LoginPayload): Promise<void> => {
    return request(
      {
        url: AuthEndpoints.login(),
        method: 'post',
      },
      payload
    );
  };
  public static readonly logout = (): Promise<void> => {
    return request({
      url: AuthEndpoints.logout(),
      method: 'post',
    });
  };
}
