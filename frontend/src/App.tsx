import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import { axiosClient } from './global/clients/axios';
import NavBar from './header/Navbar';
import Router from './routes/Router';

function App() {
  return (
    <AuthContextProvider axiosClient={axiosClient}>
      <NavBar />
      <Router />
    </AuthContextProvider>
  );
}

export default App;
