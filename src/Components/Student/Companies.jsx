import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <>
      <h1 className="text-base text-gray-800">Trusted by learners from</h1>
      <marquee loop="" truespeed="1" className=' md:mx-40 mx-15 '>
        <div className="pt-16">
          <div className="flex  items-center justify-center gap-6 md:gap-16 md:mt-5 mt-1">
            <img src={assets.accenture_logo} alt="" className="w-[80%] md:w-48" />
            <img src={assets.microsoft_logo} alt="" className="w-[80%] md:w-48" />
            <img src={assets.adobe_logo} alt="" className="w-[80%] md:w-48" />
            <img src={assets.walmart_logo} alt="" className="w-[80%] md:w-48" />
            <img src={assets.paypal_logo} alt="" className="w-[80%] md:w-48" />
          </div>
        </div>
      </marquee>
    </>
  );
};

export default Companies;
