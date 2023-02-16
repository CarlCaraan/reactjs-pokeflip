import React from "react";
import bannerImage from "../images/banner.png";
import brand from "../images/brand.png";

function Banner() {
  return (
    <div className="w-full py-24">
      <img
        className="w-1/2 mx-auto pt-6
        sm:w-1/2 md:w-1/4 lg:1/3 xl:w-1/6"
        src={bannerImage}
        alt={bannerImage}
      />
      <h4 className="text-center text-4xl text-white font-weight font-bold">
        Pokeflip
      </h4>
      <img
        className="w-1/2 mx-auto mt-4
        sm:w-1/2 md:w-1/4 lg:1/3 xl:w-1/6"
        src={brand}
        alt={brand}
      />
    </div>
  );
}

export default Banner;
