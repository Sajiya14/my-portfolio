import { useState } from "react";
import { experienceData } from "./ExperienceData";
import ExperienceDetails from "./ExperienceDetails";

export default function Experience() {
  const [active, setActive] = useState("royalIT");

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-14">Working Experiences</h2>

      <div className="flex h-100px gap-10">

      <div className="">
        {Object.keys(experienceData).map((key) => (
          <div className="border-l">
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`text-left px-4 py-3 transition cursor-pointer
                ${
                  active === key
                    ? "w-52 text-blue-500 font-medium border-l-4 bg-blue-500/15 border-blue-500 pl-4 py-3"
                    : "w-52 text-gray-500 hover:text-black pl-5 dark:hover:text-white py-3 hover:bg-blue-500/20"
                }`}>
              {experienceData[key].company}
            </button>
          </div>
          
        ))}
      </div>
      <ExperienceDetails data={experienceData[active]} />
    </div>
    </div>
    
  );
}
