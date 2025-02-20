import { LoginPayload } from '../../models/login';
import { User } from '../../models/user';
import AuthService from '../services/authService';

export default class AuthQueryMethods {
  public static readonly checkAuth = async (): Promise<User> => {
    const response = await AuthService.checkAuth();
    return response;
  };

  public static readonly login = async (
    payload: LoginPayload
  ): Promise<void> => {
    const response = await AuthService.login(payload);
    return response;
  };

  public static readonly logout = async () => {
    const response = await AuthService.logout();
    return response;
  };
}
