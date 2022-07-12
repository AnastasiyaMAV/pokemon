import React from 'react';

import s from './Error.module.scss';

import SmallPokeBallPng from '../../assets/images/SmallPokeBall.png';
import Heading from '../../ui/Heading';

const Error = () => {
  return (
    <div className={s.root}>
      <Heading type="h2">Something wrong! Try a little later.</Heading>
      <div className={s.smallPokeBall}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
    </div>
  );
};

export default Error;
