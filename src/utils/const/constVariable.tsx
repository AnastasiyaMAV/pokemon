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
    value: 'Pokédex',
    link: LinkEnum.POKEDEX,
  },
  {
    id: 3,
    value: 'Pokemon Search',
    link: LinkEnum.SEARCH,
  },
  {
    id: 4,
    value: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
  },
  {
    id: 5,
    value: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
  },
];
