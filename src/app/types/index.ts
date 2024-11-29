export interface Experience {
  role: string;
  company: string;
  startDate: string; // Format: 'YYYY-MM-DD'
  endDate: string | 'Present'; // Format: 'YYYY-MM-DD' or 'Present'
  highlights: string[];
  technologies?: string[];
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface Skills {
  [category: string]: SkillItem[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export interface Event {
  role: string;
  organization: string;
  period: string;
  description: string[];
  achievements?: string[];
}
