import React from 'react';
import s from './Empty.module.scss';

import EmptyPikachu from '../../../assets/images/EmptyPikachu.png';
import Layout from '../../UI/Layout';

const Empty = () => {
  return (
    <Layout>
      <div className={s.root}>
        <div>This is empty page!</div>
        <div>
          <img src={EmptyPikachu} alt="Empty Pikachu" />{' '}
        </div>
      </div>
    </Layout>
  );
};

export default Empty;
