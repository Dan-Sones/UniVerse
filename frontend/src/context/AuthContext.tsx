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
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
  };

interface AuthContextType {
  authenticated: boolean;
  user: User | undefined;
  login: (email: string, password: string) => void;
  logout: VoidFunction;
}

interface AuthProviderProps {
  children: ReactNode;
  axiosClient: AxiosInstance;
}



export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children, axiosClient } = props;
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();

  const checkAuth = async () => {
    try {
      const response = await axiosClient.get('/users/me');
      if (response.status == 200) {
        setUser(response.data.user);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        setUser(undefined);
      }
    } catch (error) {
      setAuthenticated(false);
      setUser(undefined);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
        await axiosClient.post('/users/login', {email, password})
        await checkAuth();
    } catch (error) {
        // handle some error idk how
    }
  };

  const logout = () => {
    setUser(undefined);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
