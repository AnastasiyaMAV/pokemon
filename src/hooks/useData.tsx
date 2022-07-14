import { useEffect, useState } from 'react';
import { ENDPOINT_ENUM } from '../types/dataEnum';
import { IData } from '../types/dataInterface';
import request from '../utils/request';

const useData = (endpoint: ENDPOINT_ENUM, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await request(endpoint, query);

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, deps);
  return {
    data,
    isLoading,
    isError,
  };
};
export default useData;
