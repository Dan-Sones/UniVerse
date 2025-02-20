import { createContext, ReactNode, useContext, useMemo } from 'react';
import { User } from '../models/user';
import { useQuery } from '@tanstack/react-query';
import AuthQueryMethods from '../api/queries/AuthQueries';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

interface AuthContextType {
  authenticated: boolean;
  user: User | undefined;
  loading: boolean;
  refreshAuth: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const {
    data: user,
    isLoading,
    refetch: refreshAuth,
    isError,
  } = useQuery({
    queryKey: ['AUTH'],
    retry: false,
    queryFn: () => AuthQueryMethods.checkAuth(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  const isAuthenticated = useMemo(() => {
    return !isLoading && !isError && !!user;
  }, [isLoading, isError, user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: isAuthenticated,
        loading: isLoading,
        refreshAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
