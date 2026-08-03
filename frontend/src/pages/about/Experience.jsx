import { useState } from "react";
import { experienceData } from "./ExperienceData";
import ExperienceDetails from "./ExperienceDetails";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  const experienceKeys = Object.keys(experienceData);

  const [activeIndex, setActiveIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(false);


  const activeKey = experienceKeys[activeIndex];

  const activeCompany = experienceData[activeKey].company;

  return (
    <div className="animate-fade">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
        Working Experiences
      </h2>

      {/* Mobile Content */}
      <div className="md:hidden relative mb-8">
        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          className="w-full flex items-center justify-between px-4 py-3  bg-blue-500/15 text-white text-left transition border border-white/10  rounded-lg cursor-pointer"
        >
          <span className="text-blue-500 font-medium">
            {activeCompany}
          </span>

          <ChevronDown
            size={20}
            className={`
            transition-transform
            duration-300

            ${openDropdown ? "rotate-180" : ""}
            `}
          />
        </button>

        <div className={`absolute z-20 mt-2 w-full rounded-lg border border-white/10 bg-[#111] md:hidden overflow-hidden transition-all duration-300
          ${openDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          {experienceKeys.map((key, index) => (
            <button
              key={key}
              onClick={() => {
                setActiveIndex(index);
                setOpenDropdown(false);
              }}
              className={`w-full text-left px-4 py-3 transition cursor-pointer ${
                activeIndex === index
                  ? "text-blue-500 font-medium border-l-4 border-blue-500 bg-blue-500/15"
                  : "text-gray-500 hover:text-white hover:bg-blue-500/20"
              }`}
            >
              {experienceData[key].company}
            </button>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <ExperienceDetails data={experienceData[activeKey]} />
      </div>

      {/* Desktop Content */}
      <div className="hidden md:flex gap-10 mb-8">
          <div className="">
            {experienceKeys.map((key, index) => (
              <div key={key} className="border-l border-white/20">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-46 text-left px-4 py-3 transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? "text-blue-500 font-medium border-l-4 border-blue-500 bg-blue-500/15"
                      : "text-gray-500 hover:text-white hover:bg-blue-500/20"
                  }`}
                >
                  {experienceData[key].company}
                </button>
              </div>
            ))}
          </div>

          <div className="hidden md:block w-full">
            <ExperienceDetails data={experienceData[activeKey]} />
          </div>
      </div>
      
    </div>
  );
}
