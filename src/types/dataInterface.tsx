/* eslint-disable camelcase */
// export interface IStats {
//   hp: number;
//   attack: number;
//   defense: number;
//   'special-attack': number;
//   'special-defense': number;
//   speed: number;
// }

// export interface Ipokemons {
//   name_clean: string;
//   abilities: string[];
//   stats: IStats;
//   types: string[];
//   img: string;
//   name: string;
//   base_experience: number;
//   height: number;
//   id: number;
//   isDefault: boolean;
//   order: number;
//   weight: number;
// }

// export interface IData {
//   total: number;
//   limit: number;
//   offset: number;
//   count: number;
//   pokemons: Ipokemons[];
// }

// export interface IQuery {
//   name?: string;
//   limit?: number;
//   total?: number;
//   count?: number;
//   offset?: number;
// }

export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface Ipokemons {
  name: string;
  url: string[];
}

export interface IData {
  count: number;
  next: string;
  previous: number;
  results: Ipokemons[];
}

export interface IQuery {
  name?: string;
  limit?: number;
}

export interface IpokemonsOneSpritesOther {
  dream_world: Record<string, string>;
}

export interface IpokemonsOneSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: IpokemonsOneSpritesOther;
  versions: object;
}

export interface IpokemonsOneTypesType {
  name: string;
  url: string;
}

export interface IpokemonsOneTypes {
  slot: number;
  type: IpokemonsOneTypesType;
}

export interface IpokemonsOne {
  abilities: object[];
  base_experience: number;
  forms: object[];
  game_indices: object[];
  height: number;
  held_items: object[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: object[];
  name: string;
  order: number;
  past_types: object[];
  species: Record<string, string>;
  sprites: IpokemonsOneSprites;
  stats: object[];
  types: IpokemonsOneTypes[];
  weight: number;
}
