import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/assets/styles/main.scss';
import 'uikit/dist/js/uikit.min.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routs';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
