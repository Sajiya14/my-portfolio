import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/sp logo white.png";

const base =
  "relative py-1 text-sm font-medium transition-all duration-300 group";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 font-poppins">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-18 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-11 sm:h-12 md:h-14"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">

          {links.map(({ to, label }) => (

            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${base} ${
                  isActive
                    ? "text-blue-500"
                    : "text-white hover:text-blue-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500
                    transition-transform duration-300 origin-center
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

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg border border-white/10 hover:bg-white/5 transition cursor-pointer"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4 border-t border-white/10 bg-black">

          {links.map(({ to, label }) => (

            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 mb-2 transition-all duration-300 ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>

          ))}

        </div>
      </div>
    </nav>
  );
}