import React from 'react';
import { Mail, Calendar, MapPin, Phone, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
        <div className="grid md:grid-cols-2">
          
          {/* Visual Side */}
          <div className="bg-slate-900 p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-cyan-600/20 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always interested in discussing quantitative finance, algorithm development, or potential collaboration opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-slate-300">
                  <MapPin className="mr-4 text-indigo-400" size={20} />
                  <span>Valencia, Spain</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="mr-4 text-indigo-400" size={20} />
                  <span>+34 693 591 801</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Mail className="mr-4 text-indigo-400" size={20} />
                  <a href="mailto:ignacio.po.ipo@gmail.com" className="hover:text-white transition-colors">ignacio.po.ipo@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 relative z-10">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">Socials</p>
              <div className="flex space-x-4">
                 <a href="https://github.com/Fisjo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors font-medium">GitHub</a>
                 <a href="https://www.linkedin.com/in/ignacio-pinazo-orihuela-143539288/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors font-medium">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Action Side */}
          <div className="p-10 flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-slate-800/50">
             <div className="mb-8">
               <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600 dark:text-indigo-400">
                 <Calendar size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Schedule a Meeting</h3>
               <p className="text-slate-600 dark:text-slate-400 text-sm">
                 Want to discuss a project or opportunity? Book a slot directly on my calendar.
               </p>
             </div>

             <a 
               href="https://calendar.google.com/calendar/u/0/r/eventedit?add=ignacio.po.ipo@gmail.com&text=Meeting+with+Ignacio+Pinazo"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
             >
               Open Google Calendar
               <ExternalLink className="ml-2" size={18} />
             </a>
             
             <div className="my-6 flex items-center w-full">
               <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
               <span className="px-4 text-sm text-slate-400 uppercase tracking-wide">or</span>
               <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
             </div>

             <a 
               href="mailto:ignacio.po.ipo@gmail.com"
               className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-slate-200 dark:border-slate-600 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all bg-transparent"
             >
               Send an Email
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};