import React from 'react';
import s from './Loading.module.scss';
import PokeBallPng from '../../assets/images/Pokeball.png';

const Loading = () => {
  return (
    <div className={s.root}>
      <div className={s.pokeBall}>
        <img src={PokeBallPng} alt="PokeBall" />
      </div>
    </div>
  );
};

export default Loading;
