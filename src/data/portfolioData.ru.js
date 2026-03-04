export const portfolioData = {
  personal: {
    name: "fx.snuss",
    role: "Full-Stack Developer",
    description: "Разрабатываю современные веб-приложения с использованием React, Python и PHP. Создаю эффективные решения от фронтенда до бэкенда.",
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
      { name: 'SQL', level:79}
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "CodePulse — Соцсеть для разработчиков",
      description: "Полноценная социальная платформа для IT-специалистов: профили, посты, комментарии, лайки. Реализована аутентификация, система подписок и лента постов.",
      tech: ["Django", "Python", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      image: "/assets/project-devconnect.jpg",
      linkCode: "https://github.com/ssnus/CodePulse",
      linkDemo: "#" 
    },
    {
      id: 2,
      title: "DevTools — Модуль администрирования",
      description: "Модуль для 1С-Битрикс: очистка кеша (теги, компоненты, HTML, memcache), управление агентами, отладка, просмотр логов. Упрощает поддержку высоконагруженных проектов.",
      tech: ["Bitrix", "PHP", "JavaScript", "MySQL"],
      image: "/assets/project-bitrix-cache.jpg",
      linkCode: "https://github.com/ssnus/bitrix-dev-tools",
      linkDemo: "#" 
    },
    {
      id: 3,
      title: "SkillBridge — Биржа фрилансеров",
      description: "Платформа для поиска исполнителей: каталог специалистов, система отзывов, фильтры по навыкам и рейтингу. Полная интеграция с CMS Битрикс.",
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
      description: "Создаю адаптивные и интерактивные интерфейсы с использованием современных технологий React и JavaScript"
    },
    {
      number: "02",
      title: "Backend Development",
      description: "Разрабатываю масштабируемые API и серверные решения на Python (Django, FastAPI) и PHP"
    },
    {
      number: "03",
      title: "Full-Stack Solutions",
      description: "Интегрирую фронтенд и бэкенд, работаю с базами данных, настраиваю деплой и DevOps процессы"
    }
  ]
};