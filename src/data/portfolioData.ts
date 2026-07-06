import { Project, Certification, Experience, Achievement, Stat, GalleryImage } from '@/types/portfolio';

export const siteConfig = {
  name: "Sami Amin",
  title: "Sami Amin | Self-Taught Developer & Cybersecurity Learner Portfolio",
  description: "Personal portfolio showcasing AI-assisted web applications, cybersecurity learning, humanitarian experience, and self-directed computer science education.",
  email: "Sameaminn@gmail.com",
  github: "https://github.com/sameaminn-wq",
  linkedin: "https://www.linkedin.com/in/same-amin-cyberhlivee/",
  location: "Egypt",
  url: "https://sami-amin.vercel.app",
  ogImage: "https://sami-amin.vercel.app/images/og-image.png"
};

export const stats: Stat[] = [
  {
    label: 'Projects',
    value: '5+',
    description: 'Production-ready web applications',
  },
  {
    label: 'Certifications',
    value: '7+',
    description: 'From Google, NYU, IBM, and more',
  },
  {
    label: 'GitHub Repos',
    value: '20+',
    description: 'Code and project repositories',
  },
  {
    label: 'Volunteer Experience',
    value: '10+ Years',
    description: 'Humanitarian and educational work',
  },
];

export const projects: Project[] = [
  {
    id: 'suliman-properties',
    title: 'Suliman Properties',
    description: 'A luxurious real estate and property listing gateway showcasing high-end housing units, legally vetted contracts, and premium investment analytics in Egypt.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'GitHub'],
    githubUrl: 'https://github.com/sameaminn-wq',
    liveUrl: 'https://suliman-reall-8j11qm4u8-sameaminn-5459s-projects.vercel.app/',
    type: 'Real Estate / Corporate',
    status: 'Completed',
    year: '2026',
    image: '/images/projects/suliman.svg',
  },
  {
    id: 'lamha-ai',
    title: 'Lamha AI',
    description: 'An AI-powered operating system for visual inventory logging. Translates physical warehouse snapshots into instantly verified visual data tables using conceptual Computer Vision engines.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'GitHub', 'AI Logic'],
    githubUrl: 'https://github.com/sameaminn-wq',
    liveUrl: 'https://stackblitz-starters-kmscm2a9.vercel.app/',
    type: 'Automation',
    status: 'Completed',
    year: '2026',
    image: '/images/projects/lamha-ai.svg',
  },
  {
    id: 'cyberhlivee',
    title: 'CyberHLivee',
    description: 'AI-assisted threat intelligence platform aggregating real-time vulnerability feeds and educational cybersecurity tools.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'REST APIs', 'Vercel', 'GitHub'],
    githubUrl: 'https://github.com/sameaminn-wq/-150.git',
    liveUrl: 'https://www.cyberhlivee.com/',
    type: 'Cybersecurity',
    status: 'Completed',
    year: '2026',
    image: '/images/projects/cyberhlivee.svg',
  },
  {
    id: 'afnana',
    title: 'AFNANA',
    description: 'A customized, performant, responsive web service portal built to host technical frameworks with high SEO benchmarks.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'GitHub'],
    githubUrl: 'https://github.com/sameaminn-wq/afnan',
    liveUrl: 'https://afnana.vercel.app/',
    type: 'Portfolio',
    status: 'Completed',
    year: '2026',
    image: '/images/projects/afnana.svg',
  },
  {
    id: 'zmaks',
    title: 'ZMAKS',
    description: 'Modern clean landing corporate interface structured to display energy solution systems with rapid compilation features.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'GitHub'],
    githubUrl: 'https://github.com/sameaminn-wq/zamax.git',
    liveUrl: 'https://zmaks.vercel.app/',
    type: 'Corporate',
    status: 'Completed',
    year: '2026',
    image: '/images/projects/zmaks.svg',
  }
];

export const certifications: Certification[] = [
  {
    name: 'Google IT Support Professional Certificate',
    issuer: 'Google',
    date: 'In Progress - 2026',
    image: '/images/certificates/google-it-support.svg',
    verificationUrl: '#',
  },
  {
    name: 'Introduction to Cyber Attacks',
    issuer: 'New York University',
    date: '2025',
    image: '/images/certificates/nyu-cyber-attacks.svg',
    downloadUrl: '/docs/certificates/nyu-cyber-attacks.pdf',
  },
  {
    name: 'Cyber Attack Countermeasures',
    issuer: 'New York University',
    date: '2025',
    image: '/images/certificates/nyu-countermeasures.svg',
    downloadUrl: '/docs/certificates/nyu-countermeasures.pdf',
  },
  {
    name: 'Cybersecurity Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: '2025',
    image: '/images/certificates/ibm-cybersecurity.svg',
    downloadUrl: '/docs/certificates/ibm-cybersecurity.pdf',
  },
  {
    name: 'Job Application Essentials',
    issuer: 'IBM SkillsBuild',
    date: '2025',
    image: '/images/certificates/ibm-job-essentials.svg',
    downloadUrl: '/docs/certificates/ibm-job-essentials.pdf',
  },
  {
    name: 'Digital Skills Program - Cybersecurity Track',
    issuer: 'HireQ × Terre des Hommes',
    date: '2025',
    image: '/images/certificates/hireq-cybersecurity.svg',
    downloadUrl: '/docs/certificates/hireq-cybersecurity.pdf',
  },
  {
    name: 'EF SET English Certificate',
    issuer: 'EF SET',
    date: '2025',
    verificationUrl: 'https://cert.efset.org/en/MLc7Bq',
    image: '/images/certificates/ef-set.svg',
  },
];

export const experiences: Experience[] = [
  {
    id: 'lamha-ai-founder',
    role: 'Founder & Lead Developer',
    company: 'Lamha AI Startup',
    period: 'January 2026 - Present',
    location: 'Egypt',
    type: 'professional',
    description: [
      'Co-founded and engineered Lamha AI, an intelligent operating system translating warehouse shelf snapshots into verified data logs using computer vision concepts.',
      'Designed and built the responsive interface architecture using Next.js, React, and Tailwind CSS.',
      'Developed the conceptual visual validation flow, demonstrating a workflow that reduces manual tally verification loops by up to 70% in prototype tests.'
    ],
    achievements: [
      'Successfully compiled and deployed a full interactive visual validation prototype.',
      'Designed the complete pre-seed venture pitch deck to align development targets with corporate requirements.'
    ]
  },{
    role: 'ICDL Volunteer Teacher',
    company: 'Salam Eifat Educational School - Egypt',
    period: 'September 2025 - Present',
    description: [
      'Volunteering as an ICDL instructor teaching digital literacy and essential computer skills.',
      'Supporting learners in developing practical IT knowledge.',
      'Helping students prepare for ICDL certification exams.',
    ],
    verificationLetter: '/docs/letters/icdl-teaching.pdf',
    id: ''
  },
  {
    role: 'Cybersecurity Trainee',
    company: 'HireQ for Career Services × Terre des Hommes',
    period: 'October 2025',
    description: [
      'Completed an intensive Digital Skills Program specialising in Cybersecurity.',
      'Participated in daily practical cybersecurity tasks and collaborative team work.',
      'Contributed to a project focused on improving online safety for job seekers.',
      'Received technical mentoring from cybersecurity professionals.',
    ],
    verificationLetter: '/docs/letters/hireq-completion.pdf',
    id: ''
  },
  {
    role: 'Fundraising Officer',
    company: 'Salima RLO - Egypt',
    period: 'December 2024 - September 2025',
    description: [
      'Assisted the Fundraising Manager in preparing funding proposals.',
      'Identified potential funding opportunities and supported fundraising initiatives.',
      'Continued independent study in cybersecurity alongside professional responsibilities.',
    ],
    id: ''
  },
  {
    role: 'Humanitarian Volunteer & Data Entry Assistant',
    company: 'Sabren Organization Humanitarian Affairs (SOAH) - Sudan',
    period: 'January 2013 - February 2023',
    description: [
      'Managed data entry and information management for refugee support operations.',
      'Participated in humanitarian field missions and refugee camp activities.',
      'Helped distribute food assistance at refugee border locations.',
      'Worked in emergency response during critical situations.',
    ],
    verificationLetter: '/docs/letters/soah-humanitarian.pdf',
    id: ''
  },
];

export const achievements: Achievement[] = [
  {
    id: 'project-suliman',
    title: 'Suliman Properties Platform',
    description: 'Launched a robust corporate housing gateway showcasing premium real estate with clean contracts and analytics.',
    icon: '🏢',
    type: 'project',
    date: '2026',
  },
  {
    id: 'project-lamha',
    title: 'Lamha AI Visual Prototyping',
    description: 'Engineered an AI-powered visual log framework checking real-time warehouse data logs.',
    icon: '💡',
    type: 'project',
    date: '2026',
  },
  {
    id: 'cert-google',
    title: 'Google IT Support Certificate',
    description: 'Professional IT training from Google covering hardware, networking, operating systems, and troubleshooting.',
    icon: '🎓',
    type: 'certification',
    date: '2026',
  },
  {
    id: 'cert-nyu-1',
    title: 'Introduction to Cyber Attacks',
    description: 'Completed NYU course on cybersecurity threats, attack vectors, and defense strategies.',
    icon: '🛡️',
    type: 'certification',
    date: '2025',
  },
  {
    id: 'cert-nyu-2',
    title: 'Cyber Attack Countermeasures',
    description: 'Advanced NYU course on defensive strategies, risk management, and security principles.',
    icon: '🔒',
    type: 'certification',
    date: '2025',
  },
  {
    id: 'cert-ibm',
    title: 'Cybersecurity Fundamentals',
    description: 'IBM SkillsBuild certification covering security concepts, threat analysis, and digital safety.',
    icon: '💻',
    type: 'certification',
    date: '2025',
  },
  {
    id: 'volunteer-teaching',
    title: 'ICDL Volunteer Teaching',
    description: 'Teaching digital literacy and computer skills to learners at Salam Eifat Educational School.',
    icon: '👨‍🏫',
    type: 'volunteer',
    date: '2025-Present',
  },
  {
    id: 'volunteer-humanitarian',
    title: 'Humanitarian Volunteer',
    description: '10+ years of humanitarian work with SOAH, assisting refugees and displaced communities in Sudan.',
    icon: '🤝',
    type: 'humanitarian',
    date: '2013-2023',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'project-suliman',
    src: '/images/projects/suliman.svg',
    alt: 'Suliman Properties screenshot',
    caption: 'Suliman Properties Gateway - Luxurious Real Estate and Investments',
    category: 'project',
  },
  {
    id: 'project-lamha',
    src: '/images/projects/lamha-ai.svg',
    alt: 'Lamha AI workspace screenshot',
    caption: 'Lamha AI - Computer Vision Inventory Management OS',
    category: 'project',
  },
  {
    id: 'cert-google',
    src: '/images/certificates/google-it-support.svg',
    alt: 'Google IT Support Professional Certificate',
    caption: 'Google IT Support Certification (In Progress)',
    category: 'certificate',
  },
  {
    id: 'cert-nyu-1',
    src: '/images/certificates/nyu-cyber-attacks.svg',
    alt: 'NYU Introduction to Cyber Attacks Certificate',
    caption: 'New York University - Introduction to Cyber Attacks',
    category: 'certificate',
  },
  {
    id: 'cert-nyu-2',
    src: '/images/certificates/nyu-countermeasures.svg',
    alt: 'NYU Cyber Attack Countermeasures Certificate',
    caption: 'New York University - Cyber Attack Countermeasures',
    category: 'certificate',
  },
  {
    id: 'cert-ibm',
    src: '/images/certificates/ibm-cybersecurity.svg',
    alt: 'IBM Cybersecurity Fundamentals Certificate',
    caption: 'IBM SkillsBuild - Cybersecurity Fundamentals',
    category: 'certificate',
  },
  {
    id: 'cert-hireq',
    src: '/images/certificates/hireq-cybersecurity.svg',
    alt: 'HireQ Digital Skills Certificate',
    caption: 'HireQ × Terre des Hommes - Cybersecurity Track',
    category: 'certificate',
  },
  {
    id: 'cert-efset',
    src: '/images/certificates/ef-set.svg',
    alt: 'EF SET English Certificate',
    caption: 'EF SET English Certificate - B1 Level',
    category: 'certificate',
  },
  {
    id: 'project-afnana',
    src: '/images/projects/afnana.svg',
    alt: 'AFNANA website screenshot',
    caption: 'AFNANA - Professional Portfolio Website',
    category: 'project',
  },
  {
    id: 'project-cyberhlivee',
    src: '/images/projects/cyberhlivee.svg',
    alt: 'CyberHLivee website screenshot',
    caption: 'CyberHLivee - Cybersecurity Platform',
    category: 'project',
  },
  {
    id: 'volunteer-teaching',
    src: '/images/volunteer/icdl-teaching.svg',
    alt: 'ICDL teaching session',
    caption: 'ICDL Volunteer Teaching at Salam Eifat School',
    category: 'volunteer',
  },
  {
    id: 'volunteer-soah',
    src: '/images/volunteer/soah-humanitarian.svg',
    alt: 'SOAH humanitarian mission',
    caption: 'Humanitarian Work with SOAH in Sudan',
    category: 'volunteer',
  },
];

export const skills = {
  aiTools: ['ChatGPT', 'Gemini', 'Claude', 'DeepSeek'],
  frontend: ['Next.js', 'React', 'JavaScript', 'HTML5', 'Tailwind CSS', ' usain ai'],
  development: [
    'Problem Solving',
    'Debugging',
    'Responsive Design',
    'UI/UX Design',
    'REST API Integration',
    'Testing & Quality Assurance',
  ],
  deployment: ['GitHub', 'Vercel'],
  cybersecurity: [
    'Cybersecurity Fundamentals',
    'Digital Safety',
    'Security Awareness',
  ],
};
