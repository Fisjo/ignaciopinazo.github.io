import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import { PROJECTS } from '../constants';
import { DummyChart } from '../components/DummyChart';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Selected Projects</h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          A collection of my work in algorithmic trading, quantitative analysis, and machine learning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
          >
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 dark:text-quant-accent uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                  {project.category}
                </span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-quant-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Visualization Section */}
              {project.hasChart && (
                <div className="mb-6">
                  <DummyChart />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="flex items-center text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                    <GitBranch size={12} className="mr-1" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Decoration line at bottom */}
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        ))}
      </div>
    </div>
  );
};