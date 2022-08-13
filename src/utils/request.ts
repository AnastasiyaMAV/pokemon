import Url from 'url';
import { ENDPOINT_ENUM } from '../types/dataEnum';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function request(
  endpoint: ENDPOINT_ENUM,
  query?: object,
  idName?: string,
) {
  if (query) {
    const uri = query && Url.format(getUrlWithParamsConfig(endpoint, query));
    const result = await fetch(uri).then((res) => res.json());
    return result;
  }
  if (idName) {
    const uri = Url.format(getUrlWithParamsConfig(endpoint, null, idName));
    const result = await fetch(uri).then((res) => res.json());
    return result;
  }
  return null;
}

export default request;
