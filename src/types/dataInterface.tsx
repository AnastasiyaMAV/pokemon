/* eslint-disable camelcase */
export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface Ipokemons {
  name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}

export interface IData {
  total: number;
  limit: number;
  offset: number;
  count: number;
  pokemons: Ipokemons[];
}

export interface IQuery {
  name?: string;
  limit?: number;
  total?: number;
  count?: number;
  offset?: number;
}
