import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, TrendingUp, Code, Database } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl mix-blend-multiply filter animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl mix-blend-multiply filter animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-ping"></span>
            Open to opportunities in Quantitative Finance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Ignacio Pinazo
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light">
            Computer Engineering Student at <span className="font-semibold text-indigo-600 dark:text-quant-accent">UPV</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-slate-500 dark:text-slate-400 mb-10 font-mono">
            <span className="flex items-center gap-1"><TrendingUp size={16} /> Quantitative Finance</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1"><Database size={16} /> Data Science</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1"><Code size={16} /> Software Engineering</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-indigo-500/25"
            >
              View Projects
              <ArrowRight className="ml-2 -mr-1" size={20} />
            </Link>
            <a 
              href="https://fisjo.github.io/ignaciopinazo.github.io/IgnacioPinazoCV_ENG.pdf" 
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 md:py-4 md:text-lg transition-all"
            >
              <Download className="mr-2 -ml-1" size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      {/* Grid Pattern Bottom */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-50 dark:from-quant-darker to-transparent z-10"></div>
    </div>
  );
};