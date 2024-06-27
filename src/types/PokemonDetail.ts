export interface PokemonPear {
  name: string;
  url: string;
}

export interface Pokemon {
  pokemon: PokemonPear;
  slot: number;
}

export interface PokemonListResp {
  count: number;
  next: string;
  previous: string;
  result: PokemonPear[];
}

interface ptype {
  slot: number;
  type: { name: string; url: string };
}

export interface PokemonDetail {
  //abilities
  //base_experience
  //cries
  //forms
  //game_indices
  //height
  //held_itmes
  //moves
  name: string;
  order: number;
  //past_abilities:[]
  //past_types
  species: { name: string; url: string };
  sprites: {};
  // stats
  types: ptype[];
}
