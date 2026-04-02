import React, { useState } from 'react'
import projectData  from './Projects/ProjectData.jsx';
import PageWrapper from '../components/PageWrapper.jsx';
import { IoClose } from "react-icons/io5";
import { MoveRight } from "lucide-react";

export default function Projects() {

  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter(
          (project) => project.category === activeTab
        );

    const [openSelectedProject, setOpenSelectedProject] = useState(null);
      
  

  return (
    <PageWrapper>
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto font-poppins">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="flex border-b gap-10 border-white/10 justify-center">
          {["All", "UX/UI", "Web Development"].map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
              }}
              className={` py-2 flex px-6 text-sm font-medium cursor-pointer ${
                activeTab === tab
                  ? "border-3 border-white/70 rounded-full text-[16px] bg-gray-500/60 transition dark:text-white text-black  text-center"
                  : "text-gray-400 hover:text-white text-[14px]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 grid-cols-[200px_1fr] pt-10 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setOpenSelectedProject(project)}
              className="p-5 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition cursor-pointer"
            >
              <img src={project.thumbnailImg} alt={project.title} className="w-full h-82 pb-3 object-cover rounded-lg mb-4" />
              <h1 className="text-xl font-semibold pb-3 hover:underline">{project.title}</h1>
              <p className="text-sm text-gray-400 mt-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags && project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

        {openSelectedProject && (
                    <div className="fixed font-poppins inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto"
                        
                    >
                      <div className="bg-black border-white border rounded-2xl p-8 w-full max-w-4xl shadow-lg relative my-8 max-h-[90vh] overflow-y-auto">
            
                        <div className='flex  items-center justify-between'>
                          <h2 className="text-2xl font-bold">{openSelectedProject.title}</h2>

                            <IoClose 
                              size={36}
                              className='text-white  cursor-pointer'
                              onClick={() => setOpenSelectedProject(null)}
                            />
                        </div>
            
                        <div className="flex mt-8 justify-center border border-white rounded-2xl items-center">
                          <img 
                              src={openSelectedProject.thumbnailImg} 
                              alt={openSelectedProject.title} 
                              className="w-full object-contain rounded-2xl" />
                        </div>
            
                        <div className="space-y-3 mt-8">
                          <div className='mb-5'>
                            <h3 className="text-xl text-white font-bold mb-2">About</h3>
                            <p className="text-gray-300">{openSelectedProject.description}</p>
                          </div>
                          
                          <div className='mb-8'>
                            <h3 className="text-xl text-white font-bold mb-2">Tech Stack</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {openSelectedProject.tags && openSelectedProject.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-gray-700 rounded-full text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl text-white font-bold">Website</h3>

                            <div className="flex gap-0 ">
                              <button
                                className="pr-2 py-3 transition group relative inline-flex items-center 
                                          gap-3 font-medium overflow-hidden cursor-pointer">
                                <div>
                                  <span className="relative text-black dark:text-white">
                                    Open Project
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
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  )}

        </div>

      </section>
    </PageWrapper>
  );
}

