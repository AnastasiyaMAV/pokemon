import React from 'react';
import s from './PokemonSmallCard.module.scss';
import Heading from '../UI/Heading';
import PokeBallPng from '../../assets/images/PokeBall.png';

interface IPokemonCard {
  name: string;
  img: string;
}

const PokemonSmallCard: React.FC<IPokemonCard> = ({ name, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h4" className={s.titleName}>
          {name}
        </Heading>
      </div>

      <div className={s.pictureWrap}>
        <img src={img || PokeBallPng} alt={name} />
      </div>
    </div>
  );
};

export default PokemonSmallCard;
