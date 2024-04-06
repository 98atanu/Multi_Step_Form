import React from "react";
import { IoPeople } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPeopleRobbery, FaPeopleLine } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdNaturePeople } from "react-icons/md";


const Step1 = () => {

  return (
    <div >
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl mb-2">Which Describes you best?</h1>
        <p className="mb-8 text-sm">This will help us personalize your experience.</p>

        <div className=" cursor-pointer md:w-[40vw]   ">
          <div className=" flex items-center gap-1 px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50 ">
            <span className="text-2xl p-1 text-teal-800 mr-4 shadow-sm shadow-teal-700 rounded-full "><IoPeople /></span>
            <span className="font-semibold ">Student </span> 
            <h1 >or soon to be enrolled</h1>
          </div>
          <div className="flex items-center gap-1 px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50">
            <span className="text-2xl p-1 text-blue-900 mr-4 shadow-sm shadow-teal-700 rounded-full"><FaPeopleCarry /></span>
            <span className="font-semibold">Professional</span> <h1>pursuing a career</h1>
          </div>
          <div className="flex items-center gap-1 px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50">
            <span className="text-2xl p-1 text-amber-900 mr-4 shadow-sm shadow-amber-800 rounded-full"><FaPeopleRobbery /></span>
            <span className="font-semibold">Parent </span> <h1>of a school-age child</h1>
          </div>
          <div className="flex items-center gap-1 font-semibold px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50">
           <span className="text-3xl text-red-700 mr-4 shadow-sm shadow-red-800 rounded-full"><IoIosPeople /></span>
           <h1>Lifelong learner</h1> 
          </div>
          <div className="flex items-center gap-1 font-semibold px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50">
            <span className="text-2xl p-1 text-purple-900 mr-4 shadow-sm shadow-purple-700 rounded-full"><FaPeopleLine /></span>
            <h1>Teacher </h1>
          </div>
          <div className="flex items-center gap-1 font-semibold px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50 "> 
          <span className="text-2xl p-1 text-rose-900 mr-4 shadow-sm shadow-rose-700 rounded-full"><MdNaturePeople /></span>
            <h1>Other</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
