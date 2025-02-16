import { Navigate, Route, Routes } from 'react-router';
import Home from '../home';
import styled from 'styled-components';
import Login from '../login/Login';
import ProtectedRoute from './ProtectedRoute';
import Register from '../login/Register';

const Wrapper = styled.div`
  max-height: 100vh;
`;

const Router = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/*" element={<Navigate to={'/chat'} />}></Route>
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Wrapper>
  );
};

export default Router;
