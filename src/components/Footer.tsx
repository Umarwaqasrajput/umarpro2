"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaFacebook, FaTiktok, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 text-center text-white mt-12">
      <p>© {new Date().getFullYear()} Umar Waqas All rights reserved.</p>

      <div className="flex justify-center space-x-6 mt-3 text-2xl">
        <Link
          href="https://github.com/UmarWaqasRajput"
          target="_blank"
          className="hover:text-gray-900"
        >
          <FaGithub />
        </Link>

        <Link
          href="https://www.facebook.com/share/1AL3gPuZqn/"
          target="_blank"
          className="hover:text-blue-600"
        >
          <FaFacebook />
        </Link>

        <Link
          href="https://vt.tiktok.com/ZSDqRdbPL/ "
          target="_blank"
          className="hover:text-black"
        >
          <FaTiktok />
        </Link>

        <Link
          href="https://youtube.com/@umarwaqasrajput?si=wyC1zNaE1NimEZqg"
          target="_blank"
          className="hover:text-blue-700"
        >
            <FaYoutube/>

        </Link>
    
      </div>
    </footer>
  );
};

export default Footer;
