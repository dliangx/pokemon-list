import { AppContext } from "@/types/AppContext";
import { useContext, useEffect, useState } from "react";
import PokemonImage from "./PokemonImage";
import { PokemonPear } from "@/types/PokemonDetail";

const ImageView = () => {
  const { images, totalPage, page, setPage } = useContext(AppContext);
  const [showImages, setShowImages] = useState<PokemonPear[]>([]);
  const pageNum = 48;
  useEffect(() => {
    setShowImages(images.slice(pageNum * page, pageNum * (page + 1)));
  }, [totalPage, page, images]);

  return (
    <div>
      <div className="my-12 mx-4 font-bold">{images.length} results found.</div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {showImages.map((pear, index) => {
          return <PokemonImage name={pear.name} url={pear.url} key={index} />;
        })}
      </div>
      <div className="mt-8 flex justify-center">
        <div>
          <button
            className={`p-2 mr-2 bg-red-900 rounded-md text-white disabled:opacity-40 disabled:cursor-not-allowed select-none`}
            disabled={page == 0 ? true : false}
            onClick={() => {
              if (page > 0) {
                setPage(page - 1);
              }
            }}
          >
            Prev
          </button>
          <button
            className={`p-2 ml-2 bg-red-900 rounded-md text-white disabled:opacity-40 disabled:cursor-not-allowed select-none`}
            disabled={page >= totalPage - 1 ? true : false}
            onClick={() => {
              if (page < totalPage - 1) {
                setPage(page + 1);
                console.log(page);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
