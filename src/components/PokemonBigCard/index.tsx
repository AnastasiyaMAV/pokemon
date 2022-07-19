import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';
import s from './PokemonBigCard.module.scss';
import PokeBallPng from '../../assets/images/PokeBall.png';

interface IPokemonCard {
  id: number;
  name: string;
  attack: number;
  defense: number;
  stAttack: number;
  stDefense: number;
  abilities?: string[];
  types?: string[];
  img: string;
  cardColor: string;
}

const PokemonBigCard: React.FC<IPokemonCard> = ({
  name,
  attack,
  defense,
  stAttack,
  stDefense,
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
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stAttack}</div>
            Special Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stDefense}</div>
            Special Defense
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
