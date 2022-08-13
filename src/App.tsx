import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Empty from './components/Pages/Empty';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import Pokedex from './components/Pages/Pokedex';
import PokemonSearch from './components/Pages/PokemonSearch';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokedex/*" element={<Pokedex />} />
        <Route path="search" element={<PokemonSearch />} />
        <Route path="legendaries" element={<Empty />} />
        <Route path="documentation" element={<Empty />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
