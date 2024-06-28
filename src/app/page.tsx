"use client";

import ImageView from "@/components/ImageView";
import TypesView from "@/components/TypesView";
import { AppContext } from "@/types/AppContext";
import { Pokemon, PokemonPear } from "@/types/PokemonDetail";
import { PokemonType } from "@/types/PokemonTypes";
import { useState } from "react";

export default function Home() {
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [typePokemonMap, setTypePokemonMap] = useState<Map<string, Pokemon[]>>(
    new Map()
  );
  const [allImagesMap, setAllImagesMap] = useState<Map<string, string>>(
    new Map()
  );
  const [images, setImages] = useState<PokemonPear[]>([]);
  const [clickButtons, setClickButtons] = useState<number[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        types,
        setTypes,
        typePokemonMap,
        setTypePokemonMap,
        allImagesMap,
        setAllImagesMap,
        images,
        setImages,
        clickButtons,
        setClickButtons,
        totalPage,
        setTotalPage,
        page,
        setPage,
      }}
    >
      <div>
        <TypesView></TypesView>
        <div>
          <ImageView></ImageView>
        </div>
      </div>
    </AppContext.Provider>
  );
}
