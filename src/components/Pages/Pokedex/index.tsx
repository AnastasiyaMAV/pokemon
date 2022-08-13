import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Heading from '../../Heading';
import PokemonSmallCard from '../../PokemonSmallCard';
import Error from '../../Error';
import Loading from '../../Loading';
import s from './Pokedex.module.scss';
import useData from '../../../hooks/useData';
import { ENDPOINT_ENUM } from '../../../types/dataEnum';
import { IQuery } from '../../../types/dataInterface';
import PokemonModal from '../../PokemonModal';
import PokeBallPng from '../../../assets/images/PokeBall.png';
// import { CustomPagination } from '../../components/CustomPagination';

const Pokedex = () => {
  const [query] = useState<IQuery>({
    limit: 100,
  });

  // const [currentPage, setCurrentPage] = useState(0);
  // const [perPage, setPerPage] = useState(10);

  // const currentPageHandler = useCallback((value: number) => {
  //   setCurrentPage(value);
  // }, []);

  // const perPageHandler = useCallback((value: number) => {
  //   setPerPage(value);
  // }, []);

  const { data, isLoading, isError } = useData(ENDPOINT_ENUM.getPokemon, query);

  // const totalCount = data?.total || 0;
  // const totalPages = useMemo(() => Math.ceil(totalCount / perPage), [
  //   perPage,
  //   totalCount,
  // ]);

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Routes>
        <Route path="/:pokemonId" element={<PokemonModal />} />
      </Routes>
      <div className={s.root}>
        <Heading type="h3" className={s.heading}>
          {data && data.count} Pokemons for you to choose your favorite
        </Heading>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={s.cards}>
            {data?.results.map((item) => {
              return (
                <Link key={item.name} to={`${item.name}`} className={s.link}>
                  <PokemonSmallCard name={item.name} img={PokeBallPng} />
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* <CustomPagination
        currentPage={currentPage}
        currentPageHandler={currentPageHandler}
        totalPages={totalPages}
        perPage={perPage}
        perPageHandler={perPageHandler}
      /> */}
    </>
  );
};

export default Pokedex;
