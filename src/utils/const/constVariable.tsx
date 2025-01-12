/* eslint-disable import/prefer-default-export */
import { LinkEnum } from '../../types/dataEnum';
import { IMenu } from '../../types/dataInterface';

export const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: LinkEnum.HOME,
  },
  {
    id: 2,
    value: 'Pokédex Cards',
    link: LinkEnum.POKEDEX_CARDS,
  },
  {
    id: 3,
    value: 'Pokemon Search',
    link: LinkEnum.SEARCH,
  },
];
