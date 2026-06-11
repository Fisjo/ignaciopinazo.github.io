import React from 'react';
import { Briefcase, GraduationCap, Code2, Users, Trophy } from 'lucide-react';
import { EXPERIENCES, EDUCATION, SKILLS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Bio & Skills */}
        <div className="lg:col-span-5 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Users className="text-indigo-500" />
              About Me
            </h2>
            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300">
              <p className="mb-4">
                I am a Computer Engineering student at the <strong className="text-indigo-600 dark:text-quant-accent">Universitat Politècnica de València (UPV)</strong> with a strong focus on quantitative finance, data science, and software engineering.
              </p>
              <p className="mb-4">
                My work revolves around applying data-driven analytical and programming skills to real-world financial challenges. I particularly enjoy <span className="underline decoration-indigo-500 decoration-2 underline-offset-2">algorithmic trading</span>, financial derivatives, and machine learning.
              </p>
              <p>
                Currently, I am an active member of the Software Group at the UPV Investment Club, developing backtesting strategies and researching portfolio optimization techniques.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Code2 className="text-indigo-500" />
              Skills
            </h3>
            <div className="space-y-6">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-white dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-md font-mono border border-slate-200 dark:border-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-7 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-indigo-500" />
              Experience
            </h2>
            <div className="border-l-2 border-indigo-100 dark:border-slate-700 ml-3 space-y-10">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-8">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-quant-darker"></span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                    <span className="text-sm font-mono text-indigo-600 dark:text-quant-accent">{exp.period}</span>
                  </div>
                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3">{exp.company}</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-400">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-indigo-500" />
              Education
            </h2>
            <div className="border-l-2 border-indigo-100 dark:border-slate-700 ml-3 space-y-10">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative pl-8">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-white dark:ring-quant-darker"></span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                    <span className="text-sm font-mono text-indigo-600 dark:text-quant-accent">{edu.period}</span>
                  </div>
                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-1">{edu.institution}</div>
                  {edu.details && <p className="text-slate-500 dark:text-slate-400 italic">{edu.details}</p>}
                </div>
              ))}
            </div>
          </section>
          
          <section>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
               <Trophy className="text-indigo-500" />
               Sports
             </h2>
             <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
               <h4 className="font-bold text-slate-900 dark:text-white">University Basketball Team</h4>
               <p className="text-slate-600 dark:text-slate-400 mt-2">
                 Regional Champions (Comunitat Valenciana) and participants in the National University Basketball Championship.
               </p>
             </div>
             <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
               <h4 className="font-bold text-slate-900 dark:text-white">Valencia Basketball Club</h4>
               <p className="text-slate-600 dark:text-slate-400 mt-2">
                 Competed as an Elite Athlete for over three years with Valencia Basketball Club, including participation in 3 Spanish National Championships and significant international tournaments.
               </p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};