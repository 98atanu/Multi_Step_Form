import React from "react";
import { MdOutlineAutoGraph } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { SiWolframmathematica } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import { BsBoxSeamFill } from "react-icons/bs";

const interests = [
  {
    title : "Learning specific skills to advance my career ",
    icon : (<MdOutlineAutoGraph className="text-4xl  p-1 text-[#0E6612] mr-4 shadow-sm shadow-[#0E6612] rounded-full  "/>)
  },
  {
    title : "Exploring new topics I'm interested in",
    icon : (<BiWorld className="text-4xl p-1 text-violet-800 mr-4 shadow-sm shadow-purple-800 rounded-full "/>)
  },
  {
    title : "Refreshing my maths foundations",
    icon : (<SiWolframmathematica className="text-4xl p-1 text-cyan-700 mr-4 shadow-sm shadow-cyan-700 rounded-full "/>)
  },
  {
    title :"Exercising my brain to stay sharp",
    icon : (<TbTargetArrow className="text-4xl p-1 text-pink-600 mr-4 shadow-sm shadow-pink-700 rounded-full "/>)
  },
  {
    title : "Something else",
    icon : (<BsBoxSeamFill className="text-4xl p-1.5 text-[#0B3E50] mr-4 shadow-sm shadow-[#0E536B] rounded-full "/>)
  },
];
const Step2 = ({ formData, handleForm }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl mb-4">
          Which are you most interested in?
        </h1>
        <p className="mb-10 text-sm">
          Choose just one. This will help us get you started (but won't limit
          your experience.)
        </p>

        <div className=" cursor-pointer w-[40vw]  ">
        {interests.map((item,index)=> (
          <div
          key={index}
          onClick={() =>handleForm(2,index)}
             className={`flex items-center gap-1 font-semibold px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50 ${formData.interest === index ? "border-zinc-400 shadow-zinc-600 mb-2 bg-slate-50" : ""}`}>
            <span>
              {item.icon}
            </span>
            <h1>{item.title} </h1>
          </div>
        ))}
            
          {/* <div className="flex items-center gap-1 font-semibold px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50 ">
            <span className="text-2xl p-1 text-violet-800 mr-4 shadow-sm shadow-purple-800 rounded-full ">
              <BiWorld />
            </span>
            <h1>Exploring new topics I'm interested in</h1>
          </div>
          <div className="flex items-center gap-1 font-semibold px-2 py-2 rounded-md border-[1px] border-zinc-200  hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50 ">
            <span className="text-2xl p-1 text-cyan-700 mr-4 shadow-sm shadow-cyan-700 rounded-full ">
              <SiWolframmathematica />
            </span>{" "}
            <h1>Refreshing my maths foundations</h1>
          </div>
          <div className="flex items-center gap-1 font-semibold px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400  shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50">
            <span className="text-2xl p-1 text-pink-600 mr-4 shadow-sm shadow-pink-700 rounded-full ">
              <TbTargetArrow />
            </span>{" "}
            <h1>Exercising my brain to stay sharp</h1>
          </div>
          <div className="flex items-center gap-1 font-semibold px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50">
            <span className="text-xl p-1.5 text-[#0B3E50] mr-4 shadow-sm shadow-[#0E536B] rounded-full ">
              <BsBoxSeamFill />
            </span>{" "}
            <h1>Something else</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Step2;
