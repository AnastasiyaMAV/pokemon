/* eslint-disable no-console */
import React from 'react';
import Button from '../../../ui/Button';
import Heading from '../../../ui/Heading';
import Header from '../../Header';
import Layout from '../../Layout';
import Parallax from '../../Parallax';
import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1">Find all your favorite Pokemon</Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => console.log('Pokemon')}>See pokemons</Button>
        </div>

        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
