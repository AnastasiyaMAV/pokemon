import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Heading from '../../components/Heading';
import PokemonSmallCard from '../../components/PokemonSmallCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import s from './Pokedex.module.scss';
import useData from '../../hooks/useData';
import { ENDPOINT_ENUM } from '../../types/dataEnum';
import { IQuery } from '../../types/dataInterface';
import useDebounce from '../../hooks/useDebounce';
import PokemonModal from '../../components/PokemonModal';
import PokeBallPng from '../../assets/images/PokeBall.png';
// import { CustomPagination } from '../../components/CustomPagination';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 8,
  });

  // const [currentPage, setCurrentPage] = useState(0);
  // const [perPage, setPerPage] = useState(10);

  // const currentPageHandler = useCallback((value: number) => {
  //   setCurrentPage(value);
  // }, []);

  // const perPageHandler = useCallback((value: number) => {
  //   setPerPage(value);
  // }, []);

  const debouncedValue = useDebounce(searchValue, 1500);

  const { data, isLoading, isError } = useData(
    ENDPOINT_ENUM.getPokemon,
    query,
    [debouncedValue],
  );

  // const totalCount = data?.total || 0;
  // const totalPages = useMemo(() => Math.ceil(totalCount / perPage), [
  //   perPage,
  //   totalCount,
  // ]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: event.target.value,
    }));
  };

  if (isLoading) {
    return <Loading />;
  }
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
        <input
          type="text"
          className={s.input}
          placeholder="Encuentra tu pokémon..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        {/* <div className={s.selects}>
          <select className={s.select} defaultValue="">
            <option value="" disabled hidden>
              Type
            </option>
            {data?.pokemons.map((item, index) => {
              return (
                <option key={item.types + String(index)} value={item.types}>
                  {item.types}
                </option>
              );
            })}
          </select>

          <select className={s.select} defaultValue="">
            <option value="" disabled hidden>
              Abilities
            </option>
            {data?.pokemons.map((item, index) => {
              return (
                <option key={item.types + String(index)} value={item.abilities}>
                  {item.abilities}
                </option>
              );
            })}
          </select>
        </div> */}

        {isLoading ? (
          <Loading />
        ) : (
          <div className={s.cards}>
            {data?.results.map((item, index) => {
              return (
                <Link key={item.name} to={`${item.name}`} className={s.link}>
                  <PokemonSmallCard
                    name={item.name}
                    attack={0}
                    defense={0}
                    types={['qq']}
                    img={PokeBallPng}
                    cardColor="electric"
                    index={index + 1}
                  />
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
