export const portfolioData = {
  personal: {
    name: "fx.snuss",
    role: "Full-Stack Developer",
    description: "I build modern web applications using React, Python, and PHP. Creating efficient solutions from frontend to backend.",
    contacts: {
      telegram: "https://t.me/fx_ssnus",
      github: "https://github.com/ssnus",
      email: "shahova.alina@list.ru"
    }
  },
  
  skills: {
    frontend: [
      { name: "React", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "SCSS", level: 88 },
      { name: "jQuery", level: 75 }
    ],
    backend: [
      { name: "Python", level: 70 },
      { name: "Django", level: 75 },
      { name: "FastAPI", level: 75 },
      { name: "PHP", level: 90 },
      { name: "Bitrix", level: 85 },
      { name: "SQL", level: 79 }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "CodePulse — Social Network for Developers",
      description: "A full-featured social platform for IT professionals: profiles, posts, comments, likes. Implemented authentication, subscription system, and post feed.",
      tech: ["Django", "Python", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      image: "/assets/project-devconnect.jpg",
      linkCode: "https://github.com/ssnus/CodePulse",
      linkDemo: "#" 
    },
    {
      id: 2,
      title: "DevTools — Administration Module",
      description: "Module for 1C-Bitrix: cache clearing (tags, components, HTML, memcache), agent management, debugging, log viewing. Simplifies maintenance of high-load projects.",
      tech: ["Bitrix", "PHP", "JavaScript", "MySQL"],
      image: "/assets/project-bitrix-cache.jpg",
      linkCode: "https://github.com/ssnus/bitrix-dev-tools",
      linkDemo: "#" 
    },
    {
      id: 3,
      title: "SkillBridge — Freelance Marketplace",
      description: "Platform for finding freelancers: specialist catalog, review system, filters by skills and rating. Full integration with Bitrix CMS.",
      tech: ["Bitrix", "PHP", "JavaScript", "CSS", "MySQL"],
      image: "/assets/project-freelancehub.jpg",
      linkCode: "https://gitlab.com/fx.snuss/skillbridge",
      linkDemo: "#"
    }
  ],
  
  infoCards: [
    {
      number: "01",
      title: "Frontend Development",
      description: "I create adaptive and interactive interfaces using modern React and JavaScript technologies"
    },
    {
      number: "02",
      title: "Backend Development",
      description: "I develop scalable APIs and server-side solutions with Python (Django, FastAPI) and PHP"
    },
    {
      number: "03",
      title: "Full-Stack Solutions",
      description: "I integrate frontend and backend, work with databases, and configure deployment and DevOps processes"
    }
  ]
};