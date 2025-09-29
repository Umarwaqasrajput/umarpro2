"use client";
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Umar Waqas Rajput</h1>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;