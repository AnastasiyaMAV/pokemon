import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';
import s from './PokemonBigCard.module.scss';
import PokeBallPng from '../../assets/images/PokeBall.png';

interface IPokemonCard {
  name: string;
  height: number;
  weight: number;
  experience: number;
  abilities?: string[];
  types: string[] | undefined;
  img: string;
  cardColor: string;
}

const PokemonBigCard: React.FC<IPokemonCard> = ({
  name,
  height,
  weight,
  experience,
  abilities,
  types,
  img,
  cardColor,
}) => {
  return (
    <div className={cn(s.root, s[`colorWrap_${cardColor}`])}>
      <div className={s.pictureWrap}>
        <img src={img || PokeBallPng} alt={name} />
      </div>
      <div className={s.infoWrap}>
        <Heading type="h3" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{height}</div>
            Height
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{weight}</div>
            Weight
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{experience}</div>
            Base experience
          </div>
        </div>
      </div>

      <div className={s.abilities}>
        Abilities
        {Array.isArray(abilities) &&
          abilities.map((item, index) => {
            return <div key={item + String(index)}>{item}</div>;
          })}
      </div>

      <div className={s.types}>
        Types
        {Array.isArray(types) &&
          types.map((item, index) => {
            return <div key={item + String(index)}>{item}</div>;
          })}
      </div>
    </div>
  );
};

export default PokemonBigCard;
