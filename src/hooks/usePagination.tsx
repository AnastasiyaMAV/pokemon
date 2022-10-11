import { useEffect, useState } from 'react';
import { ENDPOINT_ENUM } from '../types/dataEnum';
import { IData } from '../types/dataInterface';
import request from '../utils/request';

export const usePagination = (
  endpoint: ENDPOINT_ENUM,
  page: number,
  pageSize: number,
) => {
  const [dataPagination, setDatPagination] = useState<IData | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await request(
          endpoint,
          undefined,
          undefined,
          page,
          pageSize,
        );
        setDatPagination(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [endpoint, page, pageSize]);
  return {
    dataPagination,
    isLoading,
    isError,
  };
};
