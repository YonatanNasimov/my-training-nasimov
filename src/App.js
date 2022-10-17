import React from 'react';
import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom"
import Home from './components/home';
import VodInput from './components/vodInput';
import Footer from './components/footer'
import MovieInfo from './components/movieInfo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/vip/:id' element={<MovieInfo />} />
        <Route path='/*' element={<div>
          <h2>page is fund, 404!</h2>
        </div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
