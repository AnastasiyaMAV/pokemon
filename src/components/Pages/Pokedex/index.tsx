import React from 'react';
import Heading from '../../../ui/Heading';
import PokemonCard from '../../../ui/PokemonCard';
import Error from '../../Error';
import Loading from '../../Loading';
import s from './Pokedex.module.scss';
import usePokemons from '../../../hooks/usePokemons';

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div className={s.root}>
      <Heading type="h3" className={s.heading}>
        {data && data.total} Pokemons for you to choose your favorite
      </Heading>
      <input type="text" className={s.input} placeholder="Encuentra tu pokémon..." />
      <div className={s.selects}>
        <select className={s.select} defaultValue="">
          <option value="" disabled hidden>
            Type
          </option>
          {data?.pokemons.map((item, index) => {
            return (
              <option key={item.types + String(index)} value={item.types}>
                {item.types}
              </option>
            );
          })}
        </select>

        <select className={s.select} defaultValue="">
          <option value="" disabled hidden>
            Abilities
          </option>
          {data?.pokemons.map((item, index) => {
            return (
              <option key={item.types + String(index)} value={item.abilities}>
                {item.abilities}
              </option>
            );
          })}
        </select>
      </div>

      <div className={s.cards}>
        {data?.pokemons.map((item) => {
          return (
            <PokemonCard
              key={item.id}
              name={item.name_clean}
              attack={item.stats.attack}
              defense={item.stats.defense}
              types={item.types}
              img={item.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
