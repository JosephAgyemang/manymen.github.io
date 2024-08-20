import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div
        className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center
       flex flex-col justify-center"
      >
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl">Grow with data.</h1>
        <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4 ">Fast, flexible financing for
        <ReactTyped strings={['BTB','BTC','SASS']} typeSpeed={100} backspeed={90} loop 
         className="md:text-4xl sm:text-3xl text-xl pl-2  text-gray-600"/>
         </p>
         <p className="md:text-2xl  text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
         <button className="bg-[#00df9a] w-[200px] mx-auto my-6 py-2 font-medium rounded-md text-black">Get Started</button>
      </div>
     
      <div>
      
      </div>
    </div>
  );
};

export default Hero;
