import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Home.module.scss';
import { Button } from '../../UI/Button';
import { Heading } from '../../UI/Heading';
import { Layout } from '../../UI/Layout';
import { Parallax } from '../../Parallax';

import { LinkEnum } from '../../../types/dataEnum';

export const Home = () => {
  const navigate = useNavigate();

  const handlerTransition = () => {
    navigate(LinkEnum.POKEDEX);
  };

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1">Find all your favorite Pokemon</Heading>
          <Heading type="h3">
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </Heading>
          <Button onClick={handlerTransition}>See pokemons</Button>
        </div>

        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};
