import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition transform">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={projectLink} className="text-blue-600 font-semibold hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
