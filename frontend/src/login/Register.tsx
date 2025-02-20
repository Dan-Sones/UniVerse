import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { axiosClient } from '../api/axiosClient';
import { useRegister } from '../hooks/UseRegister';

const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: calc(100vh - 64px);
  background-color: #f4f6f8;
`;

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const RegisterText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

type RegisterInputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { authenticated } = useAuth();
  const { mutate: registerMutate } = useRegister();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, [authenticated]);

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const Register = async (data: RegisterInputs) => {
    registerMutate(data, {
      onSuccess: () => {
        navigate('/login');
      },
    });
  };

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    Register(data);
  };

  const password = watch('password');

  return (
    <RegisterWrapper>
      <RegisterForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RegisterText>Register</RegisterText>

          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email format',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                margin="dense"
              />
            )}
          />

          <Controller
            name="username"
            control={control}
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                fullWidth
                error={!!errors.username}
                helperText={errors.username?.message}
                margin="dense"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                margin="dense"
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: 'Confirm Password is required',
              validate: (value) =>
                value === password || 'Passwords do not match',
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Confirm Password"
                fullWidth
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                margin="dense"
              />
            )}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ marginTop: '15px', padding: '10px' }}
          >
            Register
          </Button>
        </form>
      </RegisterForm>
    </RegisterWrapper>
  );
};

export default Register;
