import { AppContext } from "@/types/AppContext";
import { Pokemon, PokemonPear } from "@/types/PokemonDetail";
import { PokemonType } from "@/types/PokemonTypes";
import { useContext, useState } from "react";

const TypesButton = (props: { name: string; index: number }) => {
  const {
    clickButtons,
    setClickButtons,
    allImagesMap,
    setImages,
    setPage,
    setTotalPage,
    types,
    typePokemonMap,
  } = useContext(AppContext);
  const [isclicked, setIsclicked] = useState(false);

  return (
    <button
      className={`px-2 py-2 mx-2 my-2 border-red-900 border-2 rounded-md font-bold 
            ${isclicked ? "text-white" : "text-red-900"}
            ${isclicked ? "bg-red-900" : "bg-white"}
            `}
      onClick={() => {
        isclicked ? setIsclicked(false) : setIsclicked(true);
        let clicks = clickButtons;
        let clickIndex = clicks.indexOf(props.index);
        clicks.includes(props.index)
          ? clicks.splice(clickIndex, 1)
          : clicks.push(props.index);
        setClickButtons(clicks);
        let maps = allImagesMap;
        let names: string[] | undefined = [];

        maps.forEach((_, key) => {
          names?.push(key);
        });

        for (let index = 0; index < clicks.length; index++) {
          const element = clicks[index];

          var plist = typePokemonMap.get(types[element].name);
          var onames = plist?.map((p) => {
            return p.pokemon.name;
          });
          if (names != undefined && onames != undefined) {
            names = names.filter((v) => onames?.includes(v));
          }
        }
        if (clicks.length == 0) {
          names.splice(1200, 1000);
        }
        console.log(names);
        let imgs: PokemonPear[] = [];
        if (names != undefined) {
          for (let index = 0; index < names.length; index++) {
            const element = names[index];
            var url = maps.get(element);
            if (url != undefined) {
              imgs.push({ name: element, url: url });
            }
          }
          setImages(imgs);
          setPage(0);
          setTotalPage(Math.round(imgs.length / 48));
        }
      }}
    >
      {props.name}
    </button>
  );
};

export default TypesButton;
