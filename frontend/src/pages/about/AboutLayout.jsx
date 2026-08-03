import React, { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";


export default function AboutLayout() {

  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { to: "/about", label: "About Me", end: true },
    { to: "/about/skills", label: "Skills" },
    { to: "/about/experience", label: "Experience" },
    { to: "/about/education", label: "Education" },
  ];

  return (
    <section className="flex items-center font-poppins animate-fade">
      <div className="container max-w-6xl mx-auto px-5 sm:px-6 py-10">

        <div className="md:hidden flex items-center justify-between mb-8">

          <h2 className="text-3xl font-semibold">
            Why Hire Me?
          </h2>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="p-2 rounded-lg border border-white/20 cursor-pointer"
          >
            {openMenu 
              ? <X size={28}/> 
              : <Menu size={28}/>
            }
          </button>

        </div>

        <div
          className={`
          md:hidden overflow-hidden transition-all duration-500
          ${openMenu ? "max-h-96 opacity-100 mb-8" : "max-h-0 opacity-0"}
          `}
        >

          <nav>
            <ul className="space-y-3">

              {links.map(({to,label,end}) => (

                <li key={to}>

                  <NavLink 
                    to={to}
                    end={end}
                    onClick={() => setOpenMenu(false)}
                  >

                  {({isActive}) => (

                    <div
                    className={`
                    px-4 py-3 rounded-lg border transition-all duration-300
                    ${
                    isActive
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-blue-500/20"
                    }
                    `}
                    >

                      {label}

                    </div>

                  )}

                  </NavLink>

                </li>

              ))}

            </ul>
          </nav>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">

          <aside className="hidden md:block mt-10">
            <div className='mt-0 mb-16 text-4xl'>
              Why Hire Me ?
            </div>

            <nav className=" items-center text-center w-60">
              <ul className="space-y-4 text-sm  font-medium">
                {links.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink to={to} end={end}>
                      {({ isActive }) => (
                        <span
                          className={`relative block  transition ${
                            isActive
                              ? "text-white rounded-lg bg-blue-500 py-2.5 "
                              : "text-white bg-white/7 border-white/10 border rounded-lg py-2.5 hover:text-blue-500 hover:bg-blue-500/20"
                          }`}
                        >
                          {label}
                          
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className='pt-10 pl-10'>
            <Outlet />
          </div>

        </div>
      </div>
    </section>
  );
}
