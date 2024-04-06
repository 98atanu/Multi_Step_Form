import React from "react";

const Step4 = () => {
  const levels = [
    { 
        level: "Introductory", 
        topic: "Arithmetic", 
        example: "5 × 1/2 = ?",
    },
    { 
        level: "Foundational", 
        topic: "Basic Algebra",
         example: "3x + 5 = 4" ,
        },
    {
      level: "Intermediate",
      topic: "Intermediate Algebra",
      example: "x = (-b ± √(b^2 - 4ac)) / 2a",
    },
    { 
        level: "Advanced", 
        topic: "Calculus", 
        example: "∫(0 to x) x^2dx = ?",
    },
  ];

  return (
    <div className="flex flex-col items-center -translate-y-10">
      <h1 className="font-bold text-4xl mb-4">What is your math comfort level?</h1>
      <p className="mb-10 font-semibold">Choose the highest level you feel confident in — you can always adjust later.</p>

      <div className="flex gap-[1vw] flex-wrap justify-center ">
        {levels.map((item,index) => (
          <div key={index} className="flex flex-col items-center border-[2px] hover:border-[#e0c790] hover:shadow-md hover:shadow-zinc-200 p-8 rounded-md ">
            <div className=" mb-6">{item.example}</div>
            <div className="font-semibold leading-none">{item.topic}</div>
            <div>{item.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step4;
