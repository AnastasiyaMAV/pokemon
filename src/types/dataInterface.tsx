export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface Ipokemons {
  // eslint-disable-next-line camelcase
  name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  // eslint-disable-next-line camelcase
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
