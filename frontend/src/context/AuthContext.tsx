import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User } from '../global/models/user';
import { AxiosInstance } from 'axios';

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
  login: (email: string, password: string) => Promise<boolean>;
  logout: VoidFunction;
}

interface AuthProviderProps {
  children: ReactNode;
  axiosClient: AxiosInstance;
}

export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children, axiosClient } = props;
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | undefined>();

  const checkAuth = async () => {
    try {
      const response = await axiosClient.get('/users/me');
      if (response.status === 200) {
        setUser(response.data.user);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        setUser(undefined);
      }
    } catch (error) {
      setAuthenticated(false);
      setUser(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      await axiosClient.post('/users/login', { email, password });
      await checkAuth();
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post('/users/logout');
      await checkAuth();
      setUser(undefined);
      setAuthenticated(false);
    } catch (error) {
      // handle some error
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, authenticated, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
