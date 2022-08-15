import configData from './config/configData';
import { ENDPOINT_ENUM } from '../types/dataEnum';

function getUrlWithParamsConfig(
  endpointConfig: ENDPOINT_ENUM,
  limit?: number | null,
  idName?: string | null,
  page?: number | null,
  pageSize?: number | null,
): any {
  if (limit) {
    const url = {
      ...configData.client.server,
      ...configData.client.endpoint[endpointConfig].uri,
      query: {
        limit,
      },
    };
    return url;
  }
  if (idName) {
    const url = {
      ...configData.client.server,
      pathname: `${configData.client.endpoint[endpointConfig].uri.pathname}${idName}`,
    };

    return url;
  }

  if (page !== 1 && pageSize) {
    const offsetParam = page && page * pageSize;

    const url = {
      ...configData.client.server,
      pathname: `${configData.client.endpoint[endpointConfig].uri.pathname}`,
      query: {
        offset: offsetParam,
        limit: pageSize,
      },
    };

    return url;
  }

  return null;
}

export default getUrlWithParamsConfig;
