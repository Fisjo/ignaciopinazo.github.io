import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', strategy: 100, benchmark: 100 },
  { name: 'Feb', strategy: 105, benchmark: 102 },
  { name: 'Mar', strategy: 103, benchmark: 101 },
  { name: 'Apr', strategy: 108, benchmark: 104 },
  { name: 'May', strategy: 112, benchmark: 106 },
  { name: 'Jun', strategy: 110, benchmark: 105 },
  { name: 'Jul', strategy: 115, benchmark: 108 },
  { name: 'Aug', strategy: 120, benchmark: 110 },
  { name: 'Sep', strategy: 125, benchmark: 112 },
  { name: 'Oct', strategy: 122, benchmark: 111 },
];

export const DummyChart: React.FC = () => {
  return (
    <div className="h-48 w-full mt-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-2 border border-slate-200 dark:border-slate-800">
      <div className="text-xs font-mono text-slate-500 mb-2 flex justify-between">
        <span>Cumulative Returns (Simulated)</span>
        <span className="text-emerald-500 font-bold">+13.7%</span>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorStrategy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" hide />
          <YAxis hide domain={['auto', 'auto']} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#f8fafc' }}
            itemStyle={{ color: '#38bdf8' }}
            labelStyle={{ display: 'none' }}
          />
          <Area type="monotone" dataKey="strategy" stroke="#38bdf8" fillOpacity={1} fill="url(#colorStrategy)" strokeWidth={2} />
          <Area type="monotone" dataKey="benchmark" stroke="#94a3b8" strokeDasharray="3 3" fill="transparent" strokeWidth={1} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};