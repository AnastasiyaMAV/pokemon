import { useEffect, useState } from 'react';
import { ENDPOINT_ENUM } from '../types/dataEnum';
import { IData } from '../types/dataInterface';
import request from '../utils/request';

export const useData = (endpoint: ENDPOINT_ENUM, limit: number | undefined) => {
  const [data, setData] = useState<IData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await request(endpoint, limit);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [endpoint, limit]);
  return {
    data,
    isLoading,
    isError,
  };
};
