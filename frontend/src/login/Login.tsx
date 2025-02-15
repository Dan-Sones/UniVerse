import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: calc(100vh - 64px);
  background-color: #f4f6f8;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  gap: 10px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const LoginText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
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
      navigate('/');
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
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ marginTop: '15px', padding: '10px' }}
        >
          Login
        </Button>
        <Link to="/register">Register?</Link>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
