import Url from 'url';
import { ENDPOINT_ENUM } from '../types/dataEnum';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function request(
  endpoint: ENDPOINT_ENUM,
  limit?: number | undefined,
  idName?: string,
  page?: number,
  pageSize?: number,
) {
  if (limit) {
    const uri = Url.format(getUrlWithParamsConfig(endpoint, limit));
    const result = await fetch(uri).then((res) => res.json());
    return result;
  }
  if (idName) {
    const uri = Url.format(getUrlWithParamsConfig(endpoint, null, idName));
    const result = await fetch(uri).then((res) => res.json());
    return result;
  }

  if (page && pageSize) {
    const uri = Url.format(
      getUrlWithParamsConfig(endpoint, null, null, page, pageSize),
    );

    const result = await fetch(uri).then((res) => res.json());
    return result;
  }
  return null;
}

export default request;
