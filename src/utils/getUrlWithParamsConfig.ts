import config from '../config';
import { ENDPOINT_ENUM } from '../types/dataEnum';

function getUrlWithParamsConfig(endpointConfig: ENDPOINT_ENUM, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };
  return url;
}

export default getUrlWithParamsConfig;
