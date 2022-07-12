import { useEffect, useState } from 'react';
import { IData } from '../types/dataInterface';

const usePokemons = () => {
  const [data, setData] = useState<IData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};
export default usePokemons;
