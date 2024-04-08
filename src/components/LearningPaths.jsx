import React from "react";
import img3 from "../assets/img3.jpg";

const learn = [
  {
    focus: "Foundation Math",
    title: "your fundamental skills in algebra, geometry and probability.",
    img: img3,
  },
  {
    focus: " Mathmatical Thinking",
    title:
      "Build your fundamental skills in algebra, geometry and probability.",
    img: img3,
  },
];

const LearningPaths = () => {
  return (
    <div className="flex flex-col items-center py-[20vh] px-[5vw]">
      <h1 className="font-bold text-4xl mb-4">
        Learning paths based on your answers
      </h1>
      <p className="mb-10 text-sm">
        Choose one to get started. You can switch anytime.
      </p>

      <div className="lg:flex md:flex-col- gap-[1vw] justify-center w-[45vw] ">
        {learn.map((item, index) => (
          <div key={index} className="flex relative items-center gap-2 border-[2px] hover:border-[#e0c790] hover:shadow-md hover:shadow-zinc-200 rounded-md p-4">
            <p className="text-xs">
              <span className="font-bold">{item.focus}</span> {item.title}
            </p>
            <div className="w-75">
              <img src={item.img} alt="" />
            </div>
            {index === 0 && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-xl font-bold bg-[#f2b230] sm:text-[9px] text-[6px] ">
                MOST POPULAR
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;
