import React from 'react';
import './index.css';
import App from './App';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Gallery from './components/Gallery';
import Contact from './components/Contact';
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);