import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaAngular,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostman } from "react-icons/si";

const SkillsList = [
  { name: "React", icon: <FaReact size={50}/>, hoverColor: 'group-hover:text-[#61DAFB]' },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50}/>, hoverColor: 'group-hover:text-[#06B6D4]' },
  { name: "Git Hub", icon: <FaGithub size={50}/>, hoverColor: 'group-hover:text-white' },
  { name: "Postman API", icon: <SiPostman size={50}/>, hoverColor: 'group-hover:text-[#F94124]' },
  { name: "HTML5", icon: <FaHtml5 size={50}/>, hoverColor: 'group-hover:text-[#FF9800]' },
  { name: "CSS3", icon: <FaCss3Alt size={50}/>, hoverColor: 'group-hover:text-[#2196F3]' },
  { name: "JavaScript", icon: <FaJs size={50}/>, hoverColor: 'group-hover:text-[#F7DF1E]'},
  { name: "Node.js", icon: <FaNodeJs size={50}/>, hoverColor: 'group-hover:text-[#4CAF50]' },
  { name: "MongoDB", icon: <SiMongodb size={50} />, hoverColor: 'group-hover:text-[#43A047]' },
  { name: "Figma", icon: <FaFigma size={50}/>, hoverColor: 'group-hover:text-[#E91E63]' },
  { name: "Angular", icon: <FaAngular size={50}/>, hoverColor: 'group-hover:text-[#fb2c36]' },
  { name: "Python", icon: <FaPython size={50} />, hoverColor: 'group-hover:text-[#FFEB3B]'},
];

export default function Skills() {

  

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Skills</h2>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {SkillsList.map((skills) => (
          <div
            key={skills.name}
            className={`group relative flex flex-col items-center justify-center w-32
            h-32 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer
            transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 group-hover:${skills.hoverColor}`}
          >
            <span className={`text-2xl text-white transition-all duration-500 ${skills.hoverColor}`}>{skills.icon}</span>

            <span
              className="absolute bottom-4 text-sm font-medium text-white
              opacity-0 translate-y-2 transition-all duration-300
              group-hover:opacity-100 group-hover:translate-y-0"
            >
              {skills.name}
            </span>
          </div>
        ))}
    </div>
    </div>
  );
}
