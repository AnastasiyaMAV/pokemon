import React, { useState } from 'react';
import Heading from '../../ui/Heading';
import PokemonCard from '../../ui/PokemonCard';
import Error from '../../Error';
import Loading from '../../Loading';
import s from './Pokedex.module.scss';
import useData from '../../../hooks/useData';
import { ENDPOINT_ENUM } from '../../../types/dataEnum';
import { IQuery } from '../../../types/dataInterface';
import useDebounce from '../../../hooks/useDebounce';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 8,
  });

  const debouncedValue = useDebounce(searchValue, 1500);

  const { data, isLoading, isError } = useData(
    ENDPOINT_ENUM.getPokemon,
    query,
    [debouncedValue],
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: event.target.value,
    }));
  };

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
      <input
        type="text"
        className={s.input}
        placeholder="Encuentra tu pokémon..."
        value={searchValue}
        onChange={handleSearchChange}
      />
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

      {isLoading ? (
        <Loading />
      ) : (
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
                cardColor={item.types[0]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
