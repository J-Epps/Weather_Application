import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Weather App</h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
