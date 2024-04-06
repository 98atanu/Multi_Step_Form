import React from "react";
import img1 from "../../assets/img1.jpg";
const Step3 = () => {
  return (
    <div className="flex lg:gap-40  gap-10  p-5">
      <div className=" lg:w-[20vw] w-[20vh]  h-full ml-10 flex items-center ">
        <img src={img1} alt="" />
      </div>
      <div className="flex flex-col items-start  w-[30vw]  mt-24">
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
