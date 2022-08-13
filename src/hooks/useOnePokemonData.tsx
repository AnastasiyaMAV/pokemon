import { useEffect, useState } from 'react';
import { ENDPOINT_ENUM } from '../types/dataEnum';
import { IpokemonsOne } from '../types/dataInterface';
import request from '../utils/request';

const useOnePokemonData = (
  endpoint: ENDPOINT_ENUM,
  idName: string | undefined,
) => {
  const [oneData, setOneData] = useState<IpokemonsOne | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await request(endpoint, undefined, idName);
        setOneData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [endpoint, idName]);

  return {
    oneData,
    isLoading,
    isError,
  };
};

export default useOnePokemonData;
