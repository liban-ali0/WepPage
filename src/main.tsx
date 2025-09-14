import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/tailwind.css'
import { BrowserRouter  } from "react-router-dom";
import './assets/styles/utilities.css';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter >
  </StrictMode>
);
