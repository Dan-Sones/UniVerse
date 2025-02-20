import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MasterRouter from './routes/MasterRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MasterRouter />
  </StrictMode>
);
