import Url from 'url';
import { ENDPOINT_ENUM } from '../types/dataEnum';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function request(endpoint: ENDPOINT_ENUM, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const result = await fetch(uri).then((res) => res.json());

  return result;
}

export default request;
