import React from 'react';
import cn from 'classnames';
import s from './PokemonBigCard.module.scss';
import Heading from '../UI/Heading';
import PokeBallPng from '../../assets/images/PokeBall.png';

interface IPokemonCard {
  name: string;
  height: number;
  weight: number;
  experience: number;
  abilities?: string[];
  types?: string[] | undefined;
  img: string;
  cardColor?: string;
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
    <>
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

        {abilities ? (
          <div className={s.abilities}>
            Abilities
            <br />
            {Array.isArray(abilities) &&
              abilities.map((item, index) => {
                return <span key={item + String(index)}>{item} &#032;</span>;
              })}
          </div>
        ) : null}

        {types ? (
          <div className={s.types}>
            Types
            <br />
            {Array.isArray(types) &&
              types.map((item, index) => {
                return <span key={item + String(index)}>{item} &#032;</span>;
              })}
          </div>
        ) : null}
      </div>

      <div className={cn(s.rootMobile, s[`colorWrap_${cardColor}`])}>
        <div className={s.pictureWrapMobile}>
          <img src={img || PokeBallPng} alt={name} />
        </div>

        <div className={s.infoWrapMobile}>
          <Heading type="h3" className={s.titleName}>
            {name}
          </Heading>
          <div className={s.statWrap}>
            <div className={s.statItem}>
              <div>{height}</div>
              Height
            </div>
            <div className={s.statItem}>
              <div>{weight}</div>
              Weight
            </div>
            <div className={s.statItem}>
              <div>{experience}</div>
              Base experience
            </div>
          </div>
        </div>

        <div className={s.abilitiesMobile}>
          Abilities
          <br />
          {Array.isArray(abilities) &&
            abilities.map((item, index) => {
              return <span key={item + String(index)}>{item} &#032;</span>;
            })}
        </div>

        <div className={s.typesMobile}>
          Types
          <br />
          {Array.isArray(types) &&
            types.map((item, index) => {
              return <span key={item + String(index)}>{item} &#032;</span>;
            })}
        </div>
      </div>
    </>
  );
};

export default PokemonBigCard;
