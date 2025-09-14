import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/tailwind.css'
import { BrowserRouter  } from "react-router-dom";
import './assets/styles/utilities.css';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter >
  </StrictMode>
);
