import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 bg-slate-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-extrabold text-amber-600">
          <NavLink to={"/"}>HOme</NavLink>
        </div>
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `hover:text-amber-500 transition ${
                  isActive
                    ? "text-amber-500 border-b-4 rounded-sm border-amber-500"
                    : "text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                `hover:text-amber-500 transition ${
                  isActive
                    ? "text-amber-500 border-b-4 rounded-sm border-amber-500"
                    : "text-white"
                }`
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                `hover:text-amber-500 transition ${
                  isActive
                    ? "text-amber-500 border-b-4 rounded-sm border-amber-500"
                    : "text-white"
                }`
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
