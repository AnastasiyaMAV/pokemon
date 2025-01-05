import React from 'react';
import cn from 'classnames';
import s from './PokemonBigCard.module.scss';
import { Heading } from '../../UI/Heading';
import PokeBallPng from '../../../assets/images/PokeBall.png';

interface IPokemonCardProps {
  name: string;
  height: number;
  weight: number;
  experience: number;
  abilities?: string[];
  types?: string[] | undefined;
  img: string;
  cardColor?: string;
}

export const PokemonBigCard: React.FC<IPokemonCardProps> = ({
  name,
  height,
  weight,
  experience,
  abilities,
  types,
  img,
  cardColor,
}) => {
  const renderStat = (nameState: string, stat: number, mobile: boolean) => {
    return stat !== null ? (
      <div className={s.statItem}>
        <div className={!mobile ? s.statValue : ''}>{stat}</div>
        {nameState}
      </div>
    ) : null;
  };

  const renderArray = (
    arrayName: string,
    array: string[] | undefined,
    nameClass: string,
  ) => {
    return array ? (
      <div className={nameClass}>
        {arrayName}
        <br />
        {Array.isArray(array) &&
          array.map((item, index) => {
            return <span key={item + String(index)}>{item} &#032;</span>;
          })}
      </div>
    ) : null;
  };

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
            {renderStat('Height', height, false)}
            {renderStat('Weight', weight, false)}
            {renderStat('Base experience', experience, false)}
          </div>
        </div>

        {renderArray('Abilities', abilities, s.abilities)}
        {renderArray('Types', types, s.types)}
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
            {renderStat('Height', height, true)}
            {renderStat('Weight', weight, true)}
            {renderStat('Base experience', experience, true)}
          </div>
        </div>

        {renderArray('Abilities', abilities, s.abilitiesMobile)}
        {renderArray('Types', types, s.typesMobile)}
      </div>
    </>
  );
};
