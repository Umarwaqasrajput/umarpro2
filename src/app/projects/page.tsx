import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "My shop",
    description: "A modern portfolio built with Next.js & Tailwind CSS.",
    image: "/pro1.jpg",
    link: "https://vercel.com/umar-waqas-rajputs-projects/rana-rajput-ali-f53t",
  },
  {
    title: "Computers",
    description: "Full-featured e-commerce application with cart & checkout.",
    image: "/pro2.jpg",
    link: "https://lastpro-lovat.vercel.app/",
  },
  {
    title: "Next.js 14+",
    description: "A blogging platform with markdown support.",
    image: "/pro3.jpg",
    link: "https://umerproject.vercel.app/",
  },
  {
    title: "PAIB",
    description: "A social media web app with posts and likes.",
    image: "/pro4.jpg",
    link: "https://umarwaqas.vercel.app/",
  },
  {
    title: "Umar Project",
    description: "Real-time chat app using WebSockets.",
    image: "/pro10.jpg",
    link: "https://umar3.vercel.app/",
  },
  {
    title: "G -Wagon",
    description: "Task management app with Kanban board.",
    image: "/6pro.jpg",
    link: "https://g-wagon-pi.vercel.app/",
  },
  {
    title: "Umar Waqas",
    description: "Weather updates using public API.",
    image: "/pro7.jpg",
    link: "https://new-tau-smoky-19.vercel.app/",
  },
  {
    title: "Fortuner",
    description: "Find movies and reviews using API.",
    image: "/pro9.jpg",
    link: "https://fortuner-psi.vercel.app/",
  },
  {
    title: "Land Cruiser",
    description: "Online food ordering app UI.",
    image: "/pro8.jpg",
    link: "https://cruiser-sable.vercel.app/",
  },
  {
    title: "Pajero",
    description: "E-learning platform for courses.",
    image: "/pro5.jpg",
    link: "https://pajero.vercel.app/",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:underline font-medium"
                target="_blank"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
