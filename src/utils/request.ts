import Url from 'url';
import { ENDPOINT_ENUM } from '../types/dataEnum';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function request(endpoint: ENDPOINT_ENUM, query?: object, id?: number) {
  if (query) {
    const uri = query && Url.format(getUrlWithParamsConfig(endpoint, query));
    const result = await fetch(uri).then((res) => res.json());

    return result;
  }
  if (id) {
    const uri = Url.format(getUrlWithParamsConfig(endpoint, null, id));

    const result = await fetch(uri).then((res) => res.json());
    return result;
  }
  return null;
}

export default request;
