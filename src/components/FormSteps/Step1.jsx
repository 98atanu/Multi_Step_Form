import React from "react";
import { IoPeople } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPeopleRobbery, FaPeopleLine } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import classNames from "classnames";
import { MdNaturePeople } from "react-icons/md";

const professions = [
  {
    focus: "Student",
    title: "or soon to be enrolled",
    icon: (
      <IoPeople className="text-3xl p-1 text-teal-800 mr-4 shadow-sm shadow-teal-700 rounded-full" />
    ),
  },
  {
    focus: "Professional",
    title: "pursuing a career",
    icon: (
      <FaPeopleCarry className="text-3xl p-1 text-blue-900 mr-4 shadow-sm shadow-teal-700 rounded-full" />
    ),
  },
  {
    focus: "Parent",
    title: "of a school-age child",
    icon: (
      <FaPeopleRobbery className="text-3xl p-1 text-amber-900 mr-4 shadow-sm shadow-amber-800 rounded-full" />
    ),
  },
  {
    focus: "Lifelong learner",
    title: "",
    icon: (
      <IoIosPeople className="text-3xl p-0.5 text-red-700 mr-4 shadow-sm shadow-red-800 rounded-full" />
    ),
  },
  {
    focus: "Teacher",
    title: "",
    icon: (
      <FaPeopleLine className="text-3xl p-1 text-purple-900 mr-4 shadow-sm shadow-purple-700 rounded-full" />
    ),
  },
  {
    focus: "Other",
    title: "",
    icon: (
      <MdNaturePeople className="text-3xl p-1 text-rose-900 mr-4 shadow-sm shadow-rose-700 rounded-full" />
    ),
  },
];

const Step1 = ({ formData, handleForm }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl mb-2">Which Describes you best?</h1>
        <p className="mb-8 text-sm">
          This will help us personalize your experience.
        </p>

        <div className=" cursor-pointer md:w-[40vw]   ">
          {professions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleForm(1, index)}
              className={classNames(
                "flex items-center gap-1 px-2 py-2 rounded-md border-[1px] border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-zinc-600 mb-2 hover:bg-slate-50",
                {
                  "border-zinc-400 shadow-zinc-600 mb-2 bg-slate-50":
                    formData.profession === index,
                }
              )}
            >
              <span>{item.icon}</span>
              <span className="font-semibold ">{item.focus} </span>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1;
