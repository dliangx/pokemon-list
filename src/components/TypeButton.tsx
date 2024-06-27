import { AppContext } from "@/types/AppContext";
import { PokemonType } from "@/types/PokemonTypes";
import { useContext, useState } from "react";

const TypesButton = (props: { name: string; index: number }) => {
  const { clickButtons, setClickButtons } = useContext(AppContext);
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
        clicks.includes(props.index)
          ? clicks.splice(clicks.indexOf(props.index))
          : clicks.push(props.index);
        setClickButtons(clicks);
      }}
    >
      {props.name}
    </button>
  );
};

export default TypesButton;
