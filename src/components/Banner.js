import React from "react";
import bannerImage from "../images/banner.png";

function Banner() {
  return (
    <div className="w-full py-24">
      <img className="w-1/6 mx-auto pt-6" src={bannerImage} alt={bannerImage} />
      <h4 className="text-center text-4xl text-white font-weight font-bold">
        Pokeflip
      </h4>
    </div>
  );
}

export default Banner;
