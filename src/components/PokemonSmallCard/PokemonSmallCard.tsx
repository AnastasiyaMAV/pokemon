import React from 'react';
import { Link } from 'react-router-dom';
import s from './PokemonSmallCard.module.scss';
import PokeBallPng from '../../assets/images/PokeBall.png';
import { Button } from '../UI/Button';
import Copy from '../../assets/images/Copy.png';
import { useClipboard } from '../../hooks/useClipboard';

interface IPokemonCardProps {
  name: string;
  img: string;
}

export const PokemonSmallCard: React.FC<IPokemonCardProps> = ({
  name,
  img,
}) => {
  const copyText = useClipboard();

  const handleCopy = (value: string) => {
    copyText(value);
  };

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Link to={`${name}`} className={s.link}>
          <h3 className={s.titleName}>{name}</h3>
        </Link>
        {!img.includes('https') ? (
          <Button size="micro" onClick={() => handleCopy(name)}>
            <img src={Copy} alt="Copy" className={s.img} />
          </Button>
        ) : (
          ''
        )}
      </div>

      <div className={s.pictureWrap}>
        <img src={img || PokeBallPng} alt={name} />
      </div>
    </div>
  );
};
