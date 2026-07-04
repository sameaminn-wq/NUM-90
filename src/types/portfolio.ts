export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: string;
  status: 'Completed' | 'In Progress';
  year: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image?: string;
  verificationUrl?: string;
  downloadUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  verificationLetter?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'certification' | 'volunteer' | 'humanitarian' | 'education' | 'project';
  date: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'certificate' | 'volunteer' | 'project' | 'event';
}
