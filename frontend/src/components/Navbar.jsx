import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logoBlack from "../assets/sp logo black.png";
import logoWhite from "../assets/sp logo white.png";

const base =
  "fixed relative py-1 px-1 text-sm font-medium transition-colors duration-300 group";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black font-poppins">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center pt-2">
            <img src={logoBlack} className="h-14 block dark:hidden" />
            <img src={logoWhite} className="h-14 hidden dark:block" />
        </Link>


        <div className="flex items-center gap-10">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${base} ${
                  isActive
                    ? "text-blue-500"
                    : "text-black dark:text-white hover:text-blue-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500
                      origin-center transform transition-transform duration-300
                      ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
