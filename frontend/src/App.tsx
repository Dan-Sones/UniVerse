import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import NavBar from './header/Navbar';
import Router from './routes/Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthContextProvider>
        <NavBar />
        <Router />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
