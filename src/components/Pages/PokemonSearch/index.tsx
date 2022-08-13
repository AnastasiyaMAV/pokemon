import React, { useState } from 'react';
import Error from '../../Error';
import s from './PokemonSearch.module.scss';
import { ENDPOINT_ENUM } from '../../../types/dataEnum';
import useOnePokemonData from '../../../hooks/useOnePokemonData';
import Button from '../../UI/Button';
import PokemonBigCard from '../../PokemonBigCard';
import PokeBallPng from '../../../assets/images/PokeBall.png';

const PokemonSearch = () => {
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
                <PokemonBigCard
                  name={oneData.name}
                  height={oneData.height}
                  weight={oneData.weight}
                  experience={oneData.base_experience}
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

export default PokemonSearch;
