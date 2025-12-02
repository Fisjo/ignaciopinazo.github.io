export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  link?: string;
  hasChart?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}