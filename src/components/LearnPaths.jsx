import React from "react";
import img3 from '../assets/img3.jpg'

const LearnPaths = () => {
  return (
    <div className="flex flex-col items-center py-[20vh] px-[5vw]">
      <h1 className="font-bold text-4xl mb-4">
        Learning paths based on your answers
      </h1>
      <p className="mb-10 text-sm">
        Choose one to get started. You can switch anytime.
      </p>

      <div className="lg:flex md:flex-col- gap-[1vw] justify-center w-[45vw] ">
        <div className="flex relative items-center gap-2 border-[2px] hover:border-[#e0c790] hover:shadow-md hover:shadow-zinc-200 rounded-md p-4">
          <p className="text-xs">
            Foundation Math your fundamental skills in algebra, geometry and
            probability.
          </p>
          <div className="w-75">
            <img src={img3} alt="" />
          </div>
          <div className="absolute -top-2.5 left-24 px-3 py-0.5 rounded-xl font-bold bg-[#f2b230] text-[9px] ">
            MOST POPULAR
          </div>
        </div>
        <div className="flex  items-center gap-4 border-[2px] hover:border-[#e0c790] hover:shadow-md hover:shadow-zinc-200 rounded-md p-4">
          <p className="text-xs">
            Mathmatical Thinking Build your fundamental skills in algebra,
            geometry and probability.
          </p>
          <div className="w-75">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPaths;
