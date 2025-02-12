import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router';

const NavBar = () => {
  const navigate  = useNavigate();

  const handlePressLogin = () => {
    navigate('/login');
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
        <Button color="inherit" onClick={handlePressLogin}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  </Box>);
};

export default NavBar;