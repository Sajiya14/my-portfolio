import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import profileImg from "../assets/Profile Img.png";
import { MoveRight } from "lucide-react";

import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  const socialMediaIcons = [
    {
      icon: <FaLinkedinIn size={18} />,
      link: "https://www.linkedin.com/in/sajith-perera-a5b038231/",
    },
    {
      icon: <IoMdMail size={18} />,
      link: "#",
    },
    {
      icon: <FaGithub size={18} />,
      link: "https://github.com/Sajiya14",
    },
  ];

  return (
    <PageWrapper>
      <section className="flex items-center font-poppins">
        <div className="container max-w-6xl mx-auto px-5 sm:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12">
            
            {/* Profile Image */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-3 md:-inset-5 rounded-full bg-blue-500/20 blur-3xl"></div>

                <img
                  src={profileImg}
                  alt="Sajith Perera"
                  className="relative
                    w-60
                    sm:w-72
                    md:w-105
                    lg:w-117.5
                    xl:w-110
                    rounded-b-full
                    object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-blue-500 mb-3">
                Hello, I'm
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                Sajith <span className="text-blue-500">Perera</span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-6">
                UI/UX Designer
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-7 max-w-lg mx-auto md:mx-0 mb-8">
                I design and build modern, responsive, and user-friendly web
                interfaces using React, Tailwind CSS, and modern web
                technologies.
              </p>

              <div className="flex flex-col items-center md:items-start gap-6">
                <Link to="/projects" className="flex gap-0 "> 
                  <button className="pr-2 py-3 transition group relative inline-flex items-center gap-3 font-medium overflow-hidden cursor-pointer"> 
                    <div> 
                      <span className="relative text-white"> 
                        View Projects 
                          <span className="absolute left-0 -bottom-2 h-0.5 w-full origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bg-white/70" /> 
                      </span> 
                    </div> 

                    <span className="inline-block animate-arrow-move text-xl"> 
                      <MoveRight size={32} strokeWidth={1} className="text-white" /> 
                    </span> 
                  </button> 
                </Link>

                <div className="flex justify-center md:justify-start items-center gap-4">
                  {socialMediaIcons.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20
                                 flex items-center justify-center
                                 transition-all duration-300
                                 hover:-translate-y-1"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}