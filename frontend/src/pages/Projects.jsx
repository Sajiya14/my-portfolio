import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

import projectData from "./Projects/ProjectData";
import PageWrapper from "../components/PageWrapper";

export default function Projects() {
  return (
    <PageWrapper>
      <section
        id="projects"
        className="font-poppins max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-20 animate-fade"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {projectData.map((project, index) => (

            <article
              key={project.id}
              className="
              rounded-2xl
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-2
              "
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >

              {/* Image */}

              <Link to={project.link}>

                <div className="overflow-hidden rounded-xl">

                  <img
                    src={project.thumbnailImg}
                    alt={project.title}
                    className="
                      w-full
                      h-64
                      sm:h-80
                      lg:h-80
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105"
                  />

                </div>

              </Link>

              {/* Badge */}

              <div className="mt-6">

                <span
                  className="
                  inline-flex
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                  px-4
                  py-2
                  text-sm
                  "
                >
                  {project.projectType}
                </span>

              </div>

              {/* Title */}

              <Link to={project.link}>

                <h3 className="mt-5 text-2xl font-semibold transition-colors duration-300">
                  {project.title}
                </h3>

              </Link>

              {/* Description */}

              <p className="mt-4 text-gray-400 leading-7 text-sm sm:text-base">
                {project.description}
              </p>

              {/* Button */}

              <Link
                to={project.link}
                className="inline-flex mt-6"
              >

                <button className="pr-2 py-3 transition group relative inline-flex items-center gap-3 font-medium overflow-hidden cursor-pointer"> 
                  <div> 
                    <span className="relative text-white"> 
                      View Case Study 
                      <span className="absolute left-0 -bottom-2 h-0.5 w-full origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bg-white/70" /> 
                    </span>    
                  </div> 
                  
                  <span className="inline-block animate-arrow-move text-xl"> 
                    <MoveRight size={32} strokeWidth={1} className="text-white" /> 
                  </span> </button>

              </Link>

            </article>

          ))}

        </div>

      </section>
    </PageWrapper>
  );
}