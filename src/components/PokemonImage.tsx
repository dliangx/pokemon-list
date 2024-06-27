import { PokemonPear } from "@/types/PokemonDetail";
import { useEffect, useState } from "react";

const PokemonImage = (props: PokemonPear) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let spritesUrl = props.url;
    setLoading(true);
    fetch(spritesUrl, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((respones) => respones.json())
      .then((data) => {
        console.log(data.sprites.front_default);
        setUrl(data.sprites.front_default);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [props.url]);

  return (
    <div>
      <div className="h-24 w-24 mx-auto">
        {loading && <div>loading...</div>}
        {!loading && (
          <img height={100} width={100} src={url} alt={props.name}></img>
        )}
      </div>
      <div className="text-center">{props.name}</div>
    </div>
  );
};

export default PokemonImage;
