import { Link, NavLink } from "react-router-dom";
import projectData  from './Projects/ProjectData.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import { IoClose } from "react-icons/io5";
import { MoveRight } from "lucide-react";
import Footer from "../components/Footer.jsx";

export default function Projects() {

  return (
    <PageWrapper>
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto font-ubuntu-sans">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 grid-cols-2 pt-10 gap-24">
          {projectData.map((project) => (
            <div
              key={project.id}
            >
              <Link to={project.link}>
                <div className="overflow-hidden transition-transform duration-400 hover:scale-95">
                  <img 
                    src={project.thumbnailImg} 
                    alt={project.title} 
                    className="w-full h-82 pb-3 object-cover mb-4 " 
                  />
                </div>
                
              </Link>

              <div className='w-fit p-1 px-6 bg-gray-200 rounded-full border mb-5 dark:bg-gray-700/50 '>
                <p className=" text-[14px] font-normal text-black dark:text-white">
                  {project.projectType}
                </p>
              </div>

              <Link to={project.link} className="flex gap-0 ">
                <div>
                  <h1 className="text-2xl font-medium pb-3 hover:underline">{project.title}</h1>
                </div>
              </Link>
              
              <p className="text-[16px] text-gray-800 mt-1 dark:text-white">
                {project.description}
              </p>

              <div>
                <Link to={project.link} className="flex gap-0 ">
                  <button
                    className="pr-2 py-3 transition group relative inline-flex items-center 
                              gap-3 font-medium overflow-hidden cursor-pointer">
                    <div>
                      <span className="relative text-black dark:text-white">
                        View Case Study
                        <span
                          className="absolute left-0 -bottom-2 h-0.5 w-full bg-black/70
                                    origin-center scale-x-0 transition-transform duration-300
                                    group-hover:scale-x-100 dark:bg-white/70"
                        />
                      </span>
                    </div>

                    <span className="inline-block animate-arrow-move text-xl">
                      <MoveRight
                        size={32}
                        strokeWidth={1}
                        className="text-black dark:text-white"
                      />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>
    </PageWrapper>
  );
}

