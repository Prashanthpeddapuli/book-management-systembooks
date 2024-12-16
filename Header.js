// Header.js
import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <nav className="flex items-center space-x-4">
        <img
          src="https://openui.fly.dev/openui/24x24.svg?text=📚"
          alt="Book Icon"
          className="w-6 h-6"
        />
        <h1 className="text-4xl font-extrabold text-accent">Book Management System</h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full px-3 py-1 hover:opacity-80 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full px-3 py-1 hover:opacity-80 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full px-3 py-1 hover:opacity-80 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full px-3 py-1 hover:opacity-80 transition duration-300"
            >
              Add Book
            </a>
          </li>
        </ul>
      </nav>
      <button className="bg-red-500 text-white rounded-lg p-2 hover:bg-red-400 transition duration-300">
        New
      </button>
      <img
        src="https://placehold.co/40x40"
        alt="Profile Image"
        className="w-10 h-10 rounded-full border-2 border-accent"
      />
    </header>
  );
}

export default Header;
