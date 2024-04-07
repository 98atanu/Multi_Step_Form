import React, { useState, useCallback } from "react";
import Step1 from "./FormSteps/Step1";
import Step2 from "./FormSteps/Step2";
import Step3 from "./FormSteps/Step3";
import Step4 from "./FormSteps/Step4";
import Step5 from "./FormSteps/Step5";
import { MdExpandLess } from "react-icons/md";
import classNames from "classnames";

const Form = ({ onSubmit }) => {
  const [page, setPage] = useState(0);
 
  const pageDisplay = () => {
    if (page === 0) {
      return <Step1  />;
    } else if (page === 1) {
      return <Step2 />;
    } else if (page === 2) {
      return <Step3 />;
    } else if (page === 3) {
      return <Step4 />;
    } else {
      return <Step5 />;
    }
  };

  const handleContinue = useCallback(() => {
    if (page < 4) {
      setPage(page + 1);
      return;
    }

    return onSubmit();
  }, [page]);

  return (
    <div className="flex flex-col justify-between h-screen  p-10 lg:px-32 ">
      <div className="flex items-center  mb-4 ">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className={classNames("-rotate-90 text-3xl", {
            "opacity-0": page === 0,
          })}
        >
          <MdExpandLess />
        </button>
        <div className="relative w-full h-2 rounded-xl overflow-hidden">
          <div className="absolute h-full w-full">
            <div
              className={`border-[2px] h-full bg-[#199e7f] rounded-xl ${
                page === 0
                  ? "w-1/5"
                  : page === 1
                  ? "w-2/5"
                  : page === 2
                  ? "w-3/5"
                  : page === 3
                  ? "w-4/5"
                  : "w-full"
              }`}
            ></div>
          </div>
          <div className="bg-[#e6e6e6] h-full w-full"></div>
          <div className=""></div>
        </div>
      </div>
      {pageDisplay()}
      <button
        onClick={handleContinue}
        className="mt-3 px-7 py-2 text-white bg-black rounded-md self-center"
      >
        Continue
      </button>
    </div>
  );
};

export default Form;
