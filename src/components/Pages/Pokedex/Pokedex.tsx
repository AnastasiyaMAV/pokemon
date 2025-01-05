import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
import { Heading } from '../../UI/Heading';
import { PokemonSmallCard } from '../../PokemonSmallCard';
import { Error } from '../../Error';
import { Loading } from '../../Loading';
import { CustomPagination } from '../../CustomPagination';

import { useData } from '../../../hooks/useData';
import { usePagination } from '../../../hooks/usePagination';

import PokeBallPng from '../../../assets/images/PokeBall.png';

import { ENDPOINT_ENUM } from '../../../types/dataEnum';
import { IData } from '../../../types/dataInterface';
import { Empty } from '../Empty';

export const Pokedex = () => {
  const [dataLimit, setDataLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError } = useData(
    ENDPOINT_ENUM.getPokemons,
    dataLimit,
  );

  const { dataPagination } = usePagination(
    ENDPOINT_ENUM.getPokemons,
    page,
    dataLimit,
  );

  const [mainData, setMainData] = useState<IData | undefined>(data);

  useEffect(() => {
    if (page === 1) {
      setMainData(data);
    } else {
      setMainData(dataPagination);
    }
  }, [page, dataPagination, data]);

  if (isError) {
    return <Error />;
  }

  const updateDataLimit = (value: number) => {
    setDataLimit(value);
  };

  const updateDataPage = (value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className={s.root}>
        <Heading type="h3" className={s.heading}>
          {data && data.count} Pokemons for you to choose your favorite
        </Heading>
        {isLoading && !mainData ? (
          <Loading />
        ) : (
          <div className={s.cards}>
            {mainData?.results.map((item) => {
              return (
                <PokemonSmallCard
                  key={item.name}
                  name={item.name}
                  img={PokeBallPng}
                />
              );
            })}
          </div>
        )}
        {!mainData && isLoading && <Empty />}
      </div>

      <CustomPagination
        updateDataLimit={updateDataLimit}
        page={page}
        updateDataPage={updateDataPage}
      />
    </>
  );
};
