import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from "react-router";
import App from './App.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
