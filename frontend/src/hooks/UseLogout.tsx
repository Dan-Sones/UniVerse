import { UseMutationResult, useMutation } from '@tanstack/react-query';
import AuthQueryMethods from '../api/queries/AuthQueries';

export const useLogout = (): UseMutationResult<void, Error, void> => {
  return useMutation({
    mutationFn: () => {
      return AuthQueryMethods.logout();
    },
  });
};
