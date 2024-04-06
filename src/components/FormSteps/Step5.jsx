import React from "react";
import { IoStar } from "react-icons/io5";
import img2 from '../../assets/img2.jpg'

const Step5 = () => {
  return (
    <div className="flex gap-20 flex-col md:flex-row">
      <div className=" flex flex-1 items-center h-full justify-center">
        <img src={img2} alt="" />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center">
        <h1 className="font-bold text-3xl mb-6">You're on your way!</h1>
        <div className="flex gap-1 text-[#eda724] text-2xl mb-4 ">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <p className="mb-8 italic ">
          "Through its engaging and well-structured courses, Brilliant has
          taught me mathematical concepts that I previously struggled to
          understand. Now I feel confident approaching both technical job
          interviews and real world problem solving situations."
        </p>
        <h2>- Jacob S.</h2>
      </div>
    </div>
  );
};

export default Step5;
