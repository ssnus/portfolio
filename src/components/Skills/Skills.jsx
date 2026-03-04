import { portfolioData } from '../../data/portfolioData.ru';
import FadeIn from '../FadeIn/FadeIn';
import { useLanguage } from '../../context/LanguageContext';
import './Skills.scss';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="skills" id="skills">
      <div className="container">
        <FadeIn direction="up">
          <h2 className="section-title">{t('skills.title')}</h2>
        </FadeIn>
        
        <div className="skills__container">
          <FadeIn direction="right" delay={200}>
            <div className="skills__column">
              <h3 className="skills__category">{t('skills.frontend')}</h3>
              <div className="skills__list">
                {portfolioData.skills.frontend.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-item__name">{skill.name}</span>
                    <div className="skill-item__bar">
                      <div className="skill-item__progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <span className="skill-item__level">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={400}>
            <div className="skills__column">
              <h3 className="skills__category">{t('skills.backend')}</h3>
              <div className="skills__list">
                {portfolioData.skills.backend.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-item__name">{skill.name}</span>
                    <div className="skill-item__bar">
                      <div className="skill-item__progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <span className="skill-item__level">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Skills;