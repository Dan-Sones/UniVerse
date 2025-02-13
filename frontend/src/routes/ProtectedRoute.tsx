import { JSX } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props;
  const { authenticated, loading } = useAuth();
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return authenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
