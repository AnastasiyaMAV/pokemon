import { useEffect, useState } from 'react';
import { ENDPOINT_ENUM } from '../types/dataEnum';
import { IpokemonsOne } from '../types/dataInterface';
import request from '../utils/request';

const useOnePokemonData = (endpoint: ENDPOINT_ENUM, id: string | undefined) => {
  const [data, setData] = useState<IpokemonsOne | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await request(endpoint, undefined, id);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [endpoint, id]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useOnePokemonData;
