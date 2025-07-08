export interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Achievement {
  id: string;
  title: string;
  platform: string;
  rating: string | number;
  description: string;
  icon: string;
  color: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
