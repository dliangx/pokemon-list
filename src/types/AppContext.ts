import { createContext } from "react";
import { Pokemon, PokemonPear } from "./PokemonDetail";
import { PokemonType } from "./PokemonTypes";

export interface AppContextType {
  types: PokemonType[];
  setTypes: any;
  typePokemonMap: Map<string, Pokemon[]>;
  setTypePokemonMap: any;
  allImagesMap: Map<string, string>;
  setAllImagesMap: any;
  images: PokemonPear[];
  setImages: any;
  clickButtons: number[];
  setClickButtons: any;
  totalPage: number;
  setTotalPage: any;
  page: number;
  setPage: any;
}

export const AppContext = createContext<AppContextType>({
  types: [],
  setTypes: null,
  typePokemonMap: new Map(),
  setTypePokemonMap: null,
  allImagesMap: new Map(),
  setAllImagesMap: null,
  images: [],
  setImages: null,
  clickButtons: [],
  setClickButtons: null,
  totalPage: 0,
  setTotalPage: null,
  page: 0,
  setPage: null,
});
