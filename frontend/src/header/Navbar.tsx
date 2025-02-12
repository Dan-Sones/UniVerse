import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();

  const { authenticated, logout } = useAuth();

  const handlePressLogin = () => {
    navigate('/login');
  };

  const handlePressLogout = async () => {
    console.log('logging out')
    logout()
    navigate('/login')
  }

  const renderLoginLogoutButton = () => {
    if (authenticated == false) {
      return (<Button color="inherit" onClick={handlePressLogin}>
        Login
      </Button>)
    } else {
      return (
        <Button color="inherit" onClick={handlePressLogout}>
          Logout
        </Button>
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UniVerse
          </Typography>
          {renderLoginLogoutButton()}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
