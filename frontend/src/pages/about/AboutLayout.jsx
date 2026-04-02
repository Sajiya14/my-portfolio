import React from 'react'
import { NavLink, Outlet } from "react-router-dom";


export default function AboutLayout() {

  const links = [
    { to: "/about", label: "About Me", end: true },
    { to: "/about/skills", label: "Skills" },
    { to: "/about/experience", label: "Experience" },
    { to: "/about/education", label: "Education" },
  ];

  return (
    <section className="flex items-center font-poppins">
      <div className="container max-w-6xl mx-auto px-6 md:py-5">

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12">

          <aside className="hidden md:block mt-10">
            <div className='mt-0 mb-16 text-4xl'>
              Why Hire Me ?
            </div>

            <nav className="fixed items-center text-center w-60">
              <ul className="space-y-4 text-sm  font-medium">
                {links.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink to={to} end={end}>
                      {({ isActive }) => (
                        <span
                          className={`relative block  transition ${
                            isActive
                              ? "text-white  dark:text-black rounded-lg bg-blue-500 py-2.5 "
                              : "text-black bg-black/20 dark:bg-white/7 dark:border-white/10 dark:border rounded-lg dark:text-white py-2.5 hover:text-blue-500 hover:bg-blue-500/20"
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
