import React from 'react';
import s from './PokemonSmallCard.module.scss';
import PokeBallPng from '../../assets/images/PokeBall.png';

interface IPokemonCardProps {
  name: string;
  img: string;
}

const PokemonSmallCard: React.FC<IPokemonCardProps> = ({ name, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <h3 className={s.titleName}>{name}</h3>
      </div>

      <div className={s.pictureWrap}>
        <img src={img || PokeBallPng} alt={name} />
      </div>
    </div>
  );
};

export default PokemonSmallCard;
