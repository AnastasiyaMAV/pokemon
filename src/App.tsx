import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/Pages/NotFound';
import Home from './components/Pages/Home';
import Pokedex from './components/Pages/Pokedex';
import PokemonSearch from './components/Pages/PokemonSearch';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokemon/" element={<Home />} />
        <Route path="pokedex/*" element={<Pokedex />} />
        <Route path="search" element={<PokemonSearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
