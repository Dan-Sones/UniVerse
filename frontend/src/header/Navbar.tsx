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
import { useLogout } from '../hooks/UseLogout';

const NavBar = () => {
  const navigate = useNavigate();

  const { authenticated, refreshAuth } = useAuth();
  const { mutate: logoutMutate } = useLogout();

  const handlePressLogin = () => {
    navigate('/login');
  };

  const handlePressLogout = async () => {
    logoutMutate(undefined, {
      onSuccess: async () => {
        await refreshAuth();
        navigate('/login');
      },
      onError: () => {},
    });
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
          {!authenticated ? (
            <Button color="inherit" onClick={handlePressLogin}>
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handlePressLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
