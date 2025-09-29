"use client";
import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
      {/* Profile Image */}
      <div className="w-64 h-64 relative shadow-lg rounded-xl overflow-hidden">
        <Image
          src="/u.jpg" // apni pic public folder me rakhna
          alt="Umar Waqas"
          fill
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi I'm <span className="text-blue-600">Umar Waqas</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 mb-6">
          A passionate <span className="font-semibold">Frontend Developer</span>,
          <span className="font-semibold">Web Developer</span> & Designer.
        </p>
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          See My Work
        </a>
      </div>
    </header>
  );
};

export default Header;
