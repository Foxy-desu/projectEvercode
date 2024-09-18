import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.scss';
import 'uikit/dist/js/uikit.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>hello</p>
  </StrictMode>,
)
