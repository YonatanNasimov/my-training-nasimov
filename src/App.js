import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/home';
import  VodInput from './components/vodInput';
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <VodInput/>
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
