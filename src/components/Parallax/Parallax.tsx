import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from '../../assets/images/SmallPokeBall.png';
import CloudSmallPng from '../../assets/images/CloudSmall.png';
import PokeBallPng from '../../assets/images/PokeBall.png';
import CloudBigPng from '../../assets/images/CloudBig.png';
import PikachuPng from '../../assets/images/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <>
      <div className={s.root}>
        <div
          className={s.smallPokeBall}
          style={{
            transform: `translate(${screenY * 0.001}px, ${screenX * 0.001}px)`,
          }}>
          <img src={SmallPokeBallPng} alt="Small PokeBall" />
        </div>
        <div
          className={s.cloud}
          style={{
            transform: `translate(${screenY * 0.002}px, ${screenX * 0.002}px)`,
          }}>
          <img src={CloudSmallPng} alt="Cloud PokeBall" />
        </div>
        <div
          className={s.cloudBig}
          style={{
            transform: `translate(${screenY * 0.003}px, ${screenX * 0.003}px)`,
          }}>
          <img src={CloudBigPng} alt="Cloud Big PokeBall" />
        </div>
        <div
          className={s.pokeBall}
          style={{
            transform: `translate(${screenY * 0.004}px, ${screenX * 0.004}px)`,
          }}>
          <img src={PokeBallPng} alt="Big PokeBall" />
        </div>
        <div
          className={s.pikachu}
          style={{
            transform: `translate(${screenY * 0.04}px, ${screenX * 0.04}px)`,
          }}>
          <img src={PikachuPng} alt="Cloud PokeBall" />
        </div>
      </div>
      <div className={s.rootMobile}>
        <img
          className={s.pikachuMobile}
          src={PikachuPng}
          alt="Cloud PokeBall"
        />
      </div>
    </>
  );
};

export default Parallax;
