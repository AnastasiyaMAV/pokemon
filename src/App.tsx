import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Empty from './Pages/Empty';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Pokedex from './Pages/Pokedex';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokedex/*" element={<Pokedex />} />
        <Route path="legendaries" element={<Empty />} />
        <Route path="documentation" element={<Empty />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
