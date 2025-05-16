import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
