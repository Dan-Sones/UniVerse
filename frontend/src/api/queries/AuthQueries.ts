import { LoginPayload } from '../../models/login';
import { RegisterPayload } from '../../models/register';
import { User } from '../../models/user';
import AuthService from '../services/AuthService';

export default class AuthQueryMethods {
  public static readonly checkAuth = async (): Promise<User> => {
    const response = await AuthService.checkAuth();
    console.log(response);
    return response;
  };

  public static readonly signUp = async (
    payload: RegisterPayload
  ): Promise<void> => {
    const response = await AuthService.signUp(payload);
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
