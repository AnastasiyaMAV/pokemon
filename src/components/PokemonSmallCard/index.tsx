import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';
import s from './PokemonSmallCard.module.scss';
import PokeBallPng from '../../assets/images/PokeBall.png';

interface IPokemonCard {
  name: string;
  attack: number;
  defense: number;
  types?: string[];
  img: string;
  cardColor: string;
}

const PokemonSmallCard: React.FC<IPokemonCard> = ({
  name,
  attack,
  defense,
  types,
  img,
  cardColor,
}) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h4" className={s.titleName}>
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
        </div>

        <div className={s.labelWrap}>
          {Array.isArray(types) &&
            types.map((item, index) => {
              return (
                <span
                  key={item + String(index)}
                  className={cn(s.label, s[`colorWrap_${item}`])}>
                  {item}
                </span>
              );
            })}
        </div>
      </div>

      <div className={cn(s.pictureWrap, s[`colorWrap_${cardColor}`])}>
        <img src={img || PokeBallPng} alt={name} />
      </div>
    </div>
  );
};

export default PokemonSmallCard;
