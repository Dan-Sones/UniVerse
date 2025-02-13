import { use, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: calc(100vh - 64px);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 15px;
`;

const LoginText = styled.p`
  font-size: large;
  font-weight: 500;
  text-align: center;
`;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState<string | null>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (!success) {
      setError(true);
      setHelperText('Invalid username or password');
    } else {
      navigate('/chat');
    }
  };

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setHelperText(null);
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setHelperText(null);
    setPassword(event.target.value);
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <LoginText>Login</LoginText>
        <TextField
          id="email"
          type="email"
          label="Email"
          variant="outlined"
          onChange={handleEmailInput}
          error={error}
          helperText={helperText}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          onChange={handlePasswordInput}
          error={error}
          helperText={helperText}
        />
        <Button variant="outlined" type="submit">
          Login
        </Button>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
