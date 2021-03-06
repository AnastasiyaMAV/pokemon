import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import s from './Home.module.scss';
import { LinkEnum } from '../../const/constVariable';

const Home = () => {
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

export default Home;
