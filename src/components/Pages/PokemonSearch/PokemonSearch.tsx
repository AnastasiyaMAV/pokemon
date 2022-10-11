import React, { useState } from 'react';
import { Error } from '../../Error';
import s from './PokemonSearch.module.scss';
import { Button } from '../../UI/Button';
import { PokemonSmallCard } from '../../PokemonSmallCard';

import PokeBallPng from '../../../assets/images/PokeBall.png';

import { useOnePokemonData } from '../../../hooks/useOnePokemonData';

import { ENDPOINT_ENUM } from '../../../types/dataEnum';

export const PokemonSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const [onePokemon, setOnePokemon] = useState<string>();

  const { oneData, isError } = useOnePokemonData(
    ENDPOINT_ENUM.getOnePokemon,
    onePokemon,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setOnePokemon(searchValue);
  };

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <div className={s.root}>
        <div className={s.searchInput}>
          <div className={s.input}>
            <input
              type="text"
              className={s.styleInput}
              placeholder="Encuentra tu pokémon..."
              value={searchValue}
              onChange={handleChange}
            />
          </div>
          <div className={s.button}>
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>

        <div className={s.content}>
          {!oneData ? (
            <div>
              <img src={PokeBallPng} alt="PokeBall" className={s.img} />
            </div>
          ) : (
            <div>
              {oneData && (
                <PokemonSmallCard
                  name={oneData.name}
                  img={oneData.sprites.other.dream_world.front_default}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
