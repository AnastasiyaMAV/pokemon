import React from 'react';
import s from './Loading.module.scss';
import PokeBallPng from '../../assets/images/PokeBall.png';

export const Loading = () => {
  return (
    <div className={s.root}>
      <div className={s.pokeBall}>
        <img src={PokeBallPng} alt="PokeBall" />
      </div>
    </div>
  );
};
