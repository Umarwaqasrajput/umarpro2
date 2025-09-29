import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto text-center py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">About Me</h2>
      
      <p className="text-lg text-gray-700 leading-relaxed">
        I’m <span className="font-semibold text-blue-600">Umar Waqas Rajput</span>, 
        a passionate <span className="font-semibold">Frontend Developer</span> and 
        <span className="font-semibold"> Designer</span>. I love creating 
        <span className="italic text-blue-500"> modern, responsive,</span> and 
        <span className="font-medium text-gray-900"> user-friendly</span> web applications 
        using <span className="font-semibold text-blue-600">Next.js</span>, 
        <span className="font-semibold text-indigo-600"> React</span>, and 
        <span className="font-semibold text-cyan-600"> Tailwind CSS</span>.
      </p>
    </section>
  );
};

export default AboutPage;
