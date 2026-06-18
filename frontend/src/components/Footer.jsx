import React from 'react'
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {

  const socialMediaIcons = [
        { icon: <IoMdMail size={16}/>, link: "#"},
        { icon: <FaLinkedinIn size={16}/>, link: "#" }
      ];

  return (
    <footer className="max-w-6xl mx-auto h-full pb-10 pt-5 border-t-4 border-black dark:border-gray-800">
      <div className="flex justify-between items-center">
        <div className="text-md text-black dark:text-white font-poppins">
          © {new Date().getFullYear()} Build by Sajith Perera. 
        </div>
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
      
    </footer>
  );
}

