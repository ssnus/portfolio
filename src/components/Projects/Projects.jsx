import FadeIn from '../FadeIn/FadeIn';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { useLanguage } from '../../context/LanguageContext';
import './Projects.scss';

const Projects = () => {
  const data = usePortfolioData(); 
  const { lang } = useLanguage(); 
  const getShortTitle = (fullTitle) => fullTitle.split(' — ')[0];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <FadeIn direction="up">
          <h2 className="section-title">
            {lang === 'ru' ? 'Работы / Проекты' : 'Works / Projects'}
          </h2>
        </FadeIn>
        
        <div className="projects__grid">
          {data.projects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 100}>
              <article className="project-card">
                <div className="project-card__visual">
                  <span className="project-card__bg-title">
                    {getShortTitle(project.title)}
                  </span>
                  
                  <div className="project-card__overlay">
                    <a href={project.linkCode} className="overlay__link" target="_blank" rel="noreferrer">
                      {lang === 'ru' ? 'Код' : 'Code'}
                    </a>
                    
                    {project.linkDemo && project.linkDemo !== '#' && project.linkDemo !== '' && (
                      <a href={project.linkDemo} className="overlay__link" target="_blank" rel="noreferrer">
                        {lang === 'ru' ? 'Демо' : 'Demo'}
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  
                  <div className="project-card__tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;