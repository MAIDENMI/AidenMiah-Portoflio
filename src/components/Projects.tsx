import React from 'react';
import { projects, Project } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-200">Projects & Hackathons</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`relative bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg p-6 flex flex-col gap-3 border-2 ${project.featured ? 'border-purple-500' : 'border-transparent'}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{project.emoji}</span>
              <span className="font-bold text-lg">{project.name}</span>
              {project.featured && (
                <span className="ml-2 px-2 py-0.5 bg-purple-200 text-purple-800 text-xs rounded-full font-semibold">Featured</span>
              )}
            </div>
            <div className="text-gray-700 dark:text-gray-200">{project.description}</div>
            {project.image && (
              <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg border my-2" />
            )}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">GitHub</a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 underline text-sm">Demo</a>
              )}
              {project.links.article && (
                <a href={project.links.article} target="_blank" rel="noopener noreferrer" className="text-pink-600 underline text-sm">Article</a>
              )}
            </div>
            {/* AI Summary Button Placeholder */}
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">AI Summary</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 