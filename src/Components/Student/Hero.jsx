import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-gray-400/90">
      <h1 className="sm:text-4xl  relative font-bold text-gray-800 max-w- mx-auto  ">
        Empower Learning, Anytime, Anywhere, <span className="text-orange-600 ">"Your learning <br />
        Journey Starts Here"</span>.
        <img
          className="md:block hidden absolute -bottom-10 w-80 right-0 "
          src={assets.sketch}
          alt=""
        />
      </h1>

      <p className="md:block hidden text-gray-800 max-w-2xl mx-auto">
        Our Learning Management System offers a seamless and engaging platform
        to deliver, track, and manage educational content — all in one place.
      </p>

      <p className="md:hidden text-gray-800 max-w-sm mx-auto">
        Our Learning Management System offers a seamless and engaging platform.
      </p>
      <SearchBar/>
    </div>
  );
};

export default Hero;
