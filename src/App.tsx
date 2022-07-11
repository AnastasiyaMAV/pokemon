import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Empty from './components/Pages/Empty';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Pokedex from './components/Pages/Pokedex';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="legendaries" element={<Empty />} />
        <Route path="documentation" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
