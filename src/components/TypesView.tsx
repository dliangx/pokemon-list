import { AppContext } from "@/types/AppContext";
import { PokemonType } from "@/types/PokemonTypes";
import { useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import TypesButton from "./TypeButton";
import { error } from "console";

const TypesView = () => {
  const {
    types,
    setTypes,
    setTypePokemonMap,
    setImages,
    setTotalPage,
    setPage,
  } = useContext(AppContext);

  const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([]);
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type";
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((respones) => respones.json())
      .then((data) => {
        // console.log(data);
        setTypes(data.results);
        setPokemonTypes(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setTypes]);

  useEffect(() => {
    let pokemonMap = new Map();
    async function fetchData(map: Map<any, any>, pokemonTypes: PokemonType[]) {
      await pokemonTypes.forEach((t: PokemonType) => {
        const typeUrl = t.url;

        fetch(typeUrl, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((respones) => respones.json())
          .then((data) => {
            map.set(t.name, data.pokemon);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }

    fetchData(pokemonMap, pokemonTypes);
    console.log(pokemonMap);
    setTypePokemonMap(pokemonMap);
  }, [pokemonTypes, setTypePokemonMap]);

  useEffect(() => {
    if (types.length == 0) {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=1200";
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((respones) => respones.json())
        .then((data) => {
          console.log(data.results);
          setImages(data.results);

          setPage(0);
          setTotalPage(data.results.length / 48);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [types, setImages, setPage, setTotalPage]);

  return (
    <div className="flex items-center mx-4 my-4">
      <div className="mr-2 my-4 font-bold self-start">Types:</div>
      <div>
        {types.length > 0 &&
          types.map((type, index) => {
            return (
              <TypesButton
                name={type.name}
                index={index}
                key={index}
              ></TypesButton>
            );
          })}
      </div>
    </div>
  );
};

export default TypesView;
