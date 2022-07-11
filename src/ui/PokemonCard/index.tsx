import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCard {
  name: string;
  attack: number;
  defense: number;
  types?: string[];
  img: string;
}

const PokemonCard: React.FC<IPokemonCard> = ({ name, attack, defense, types, img }) => {
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
            types.map((item) => {
              return <span className={s.label}>{item}</span>;
            })}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
