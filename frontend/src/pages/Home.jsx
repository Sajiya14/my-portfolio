import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import profileImg from "../assets/Profile Img.png";
import { MoveRight } from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";


export default function Home() {

  const socialMediaIcons = [
    { icon: <FaFacebookF size={16}/>, link: "#" },
    { icon: <FaGithub size={16}/>, link: "#"},
    { icon: <FaLinkedinIn size={16}/>, link: "#" },
    { icon: <FaInstagram size={16}/>, link: "#" },
    { icon: <FaXTwitter size={16}/>, link: "#"},
  ];
  return (
    <PageWrapper>
      <section className="flex items-center font-poppins">
        <div className="container max-w-6xl mx-auto px-6 py-4 md:py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

            <div>
              <p className="text-md uppercase tracking-widest text-blue-500 mb-4">
                Hello, I’m
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                Sajith <span className="text-blue-500">Perera</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-white mb-6">
                UI/UX Designer & Frontend Developer
              </h2>

              <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-8">
                I design and build modern, responsive, and user-friendly web
                interfaces using React, Tailwind CSS, and modern web technologies.
              </p>

              <div className="flex flex-col gap-6">
                <Link to="/about"  className="flex gap-0 ">
                  <button
                    className="pr-2 py-3 transition group relative inline-flex items-center 
                              gap-3 font-medium overflow-hidden cursor-pointer">
                    <div>
                      <span className="relative text-black dark:text-white">
                        More About Me
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

                <div className="flex items-center gap-4">
                  {socialMediaIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center rounded-full
                                  border border-black/20 dark:border-white/20
                                  text-black dark:text-white group
                                  transition-all duration-300
                                  hover:-translate-y-1 hover:scale-110 ${icon.hoverColor}`}
                    >
                      <span>{icon.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-5 rounded-full bg-blue-500/25 blur-2xl"></div>

                <img
                  src={profileImg}
                  alt="Sajith profile"
                  className="relative w-72 h-full md:w-full md:h-full rounded-b-full object-cover border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
