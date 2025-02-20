import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { LoginPayload } from '../models/login';
import AuthQueryMethods from '../api/queries/AuthQueries';

export const useLogin = (): UseMutationResult<
  void,
  Error,
  LoginPayload,
  void
> => {
  return useMutation({
    mutationFn: (data: LoginPayload) => {
      return AuthQueryMethods.login(data);
    },
  });
};
