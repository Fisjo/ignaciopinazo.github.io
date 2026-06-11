import { Project, Experience, Education, SkillCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'ey',
    role: 'Tax & Quantitative Services Intern',
    company: 'EY (Ernst & Young)',
    period: 'Jul 2025 – Oct 2025',
    description: [
      'Drafted technical reports and deliverables for innovation and technological projects.',
      'Conducted project data analysis and cost allocation across different R&D activities.',
      'Collaborated on financial and technical validation of client projects under Spanish tax law.'
    ]
  },
  {
    id: 'upv-club',
    role: 'Member – Software Group',
    company: 'UPV Investment Club',
    period: '2025 – Present',
    description: [
      'Development of algorithmic trading strategies and backtesting strategies.',
      'Studying risk management models and participation in quantitative finance competitions.',
      'Researching quantitative techniques for portfolio optimization.'
    ]
  },
  {
    id: 'tutor',
    role: 'Private Tutor',
    company: 'Self employed',
    period: '2022 – Present',
    description: [
      'Tutored high school and first-year college students in core subjects including English, Math, and Physics.',
      'Specialized in B1 and B2 test preparation for official English assessments.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'upv',
    degree: 'BSc Computer Science',
    institution: 'Universidad Politécnica de Valencia (UPV)',
    period: '2022 - Present',
    details: 'Focus on Software Engineering, Network Administration & Data Science.'
  },
  {
    id: 'hs',
    degree: 'High School Diploma',
    institution: 'Colegio Gran Asociación',
    period: '2020 - 2022',
    details: 'Score: 9.1 / 10'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'momentum',
    title: 'Multi-Asset Momentum Strategy',
    category: 'Algorithmic Trading',
    description: 'Implemented and backtested a multi-asset momentum strategy (long-only and market-neutral) using Python. Employed monthly rebalancing and cross-sectional ranking of returns. Evaluated performance with Sharpe, Sortino, and Calmar ratios against SPY benchmark.',
    techStack: ['Python', 'Pandas', 'NumPy', 'YahooFinance', 'Matplotlib'],
    link: 'https://github.com/Fisjo',
    hasChart: true
  },
  {
    id: 'ml-finance',
    title: 'ML Applied to Financial Markets (TFG)',
    category: 'Machine Learning',
    description: 'Bachelor Thesis (In Progress). Developing machine learning models to identify non-linear patterns in asset returns. Focusing on feature engineering from market microstructure data to predict short-term price movements.',
    techStack: ['Python', 'Scikit-Learn', 'TensorFlow', 'XGBoost'],
    hasChart: false
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'JavaScript/TypeScript', 'SQL', 'C++', 'C#']
  },
  {
    category: 'Quantitative Finance',
    skills: ['Algorithmic Trading', 'Backtesting', 'Risk', 'Derivatives', 'Portfolio Optimization']
  },
  {
    category: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis']
  },
  {
    category: 'Networks and Systems',
    skills: ['Active Directory', 'TCP/UDP', 'HTTP', 'Linux', 'Cisco', 'Communication Protocols' ]
  },
  {
    category: 'Other Skills',
    skills: ['Team work', 'Discipline', 'Communication', 'Adaptativity']
  }
];