import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Footer from "./components/Footer";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
