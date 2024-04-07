import React from "react";
import img1 from "../../assets/img1.jpg";
const Step3 = () => {
  return (
    <div className="flex  lg:gap-0  flex-col md:flex-row items-center  ">
      <div className=" flex flex-1 items-center justify-center  ">
        <img  className="md:w-[20vw] md:h-[25vw] w-[100%] h-[50%]" src={img1} alt="" />
      </div>
      <div className="flex flex-1 flex-col items-start mt -24 lg:p-20 ">
        <h1 className="font-bold text-3xl mb-4">You're in the right place</h1>
        <p className="mb-10">
          Brilliant gets you hands-on to help improve your professional skills
          and knowledge. you'll interact with concepts and solve fun problems in
          math,science, and computer science.
        </p>
      </div>
    </div>
  );
};

export default Step3;
