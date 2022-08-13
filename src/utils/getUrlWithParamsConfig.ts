import configData from './config/configData';
import { ENDPOINT_ENUM } from '../types/dataEnum';

function getUrlWithParamsConfig(
  endpointConfig: ENDPOINT_ENUM,
  query?: object | null,
  idName?: string | null,
): any {
  if (query) {
    const url = {
      ...configData.client.server,
      ...configData.client.endpoint[endpointConfig].uri,
      query: {
        ...query,
      },
    };
    return url;
  }
  if (idName) {
    const url = {
      ...configData.client.server,
      pathname: `${configData.client.endpoint[endpointConfig].uri.pathname}${idName}`,

      /*
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: string;
      */
    };

    return url;
  }

  return null;
}

export default getUrlWithParamsConfig;
