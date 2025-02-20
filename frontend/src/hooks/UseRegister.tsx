import { useMutation, UseMutationResult } from '@tanstack/react-query';
import AuthQueryMethods from '../api/queries/AuthQueries';
import { RegisterPayload } from '../models/register';

export const useRegister = (): UseMutationResult<
  void,
  Error,
  RegisterPayload,
  void
> => {
  return useMutation({
    mutationFn: (data: RegisterPayload) => {
      return AuthQueryMethods.signUp(data);
    },
  });
};
