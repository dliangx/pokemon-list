import { Pokemon } from "./PokemonDetail";

interface Name {
  language: NamesLanguage;
  name: string;
}

interface NamesLanguage {
  name: string;
  url: string;
}

export interface PokemonTypeDetail {
  //damage_relations
  //game_indices
  //generation
  //move_damage_class
  //moves
  name: string;
  names: Name[];
  pokemon: Pokemon[];
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonTypeListResp {
  count: number;
  next: string;
  previous: string;
  result: PokemonType[];
}
