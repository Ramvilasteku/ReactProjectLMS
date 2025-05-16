import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
      <>
        <div className="absolute w-full h-section-height -z-1 bg-gradient-to-t from-gray-400/90"></div>

    <footer className="md:px-36 w-full bg-gray-400/90 text-left">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/100 ">
        <div className="flex flex-col md:items-start items-center w-full ">
          <img className="w-30 lg:w-40 h-full" src={assets.studynest_logo} alt="studynest_logo" />
          <p className="mt-4 text-center md:text-left text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing nisi cupiditate nesciunt nemo quia veniam, libero maxime, quos .</p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
        <h2 className="font-semibold mb-5">Company</h2>
        <ul className="flex md:flex-col w-full justify-between text-sm md:space-y-1.5">
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold mb-5 "> Subscribe to our newsletter</h2>
          <p className="text-sm">The latest news, articles, and resources, sent to your inbox weekly</p>
          <div className="flex items-center gap-1 pt-4">
            <input type="email" placeholder="Enter your email"  className="border-2 border-gray-900 text-black font-semibold rounded-lg placeholder-black outline-none w-64 h-9 px-2 text-sm "/>
          <button className="bg-orange-500 w-24 h-9 text-white rounded-lg ">Subscribe</button>
          </div>

        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">Copyright 2025 © Study Nest. All Rights Reserved.</p>
    </footer></>
  );
};

export default Footer;
