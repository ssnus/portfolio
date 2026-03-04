import FadeIn from '../FadeIn/FadeIn';
import StickersBackground from '../StickersBackground/StickersBackground';
import CatFollow from '../CatFollow/CatFollow';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.scss';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <StickersBackground count={20} />
      
      <div className="hero__container container">
        <FadeIn direction="down" delay={100}>
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                {t('hero.greeting')} <span className="gradient-text">fx.snuss</span>
              </h1>
              <p className="hero__subtitle">{t('hero.role')}</p>
              <p className="hero__description">{t('hero.description')}</p>
              <div className="hero__buttons">
                <a href="#projects" className="btn btn--primary btn--large">{t('hero.viewProjects')}</a>
                <a href="#contact" className="btn btn--outline btn--large">{t('hero.contact')}</a>
              </div>
            </div>
            
            <FadeIn direction="up" delay={300}>
              <div className="hero__image">
                <div className="image-placeholder">
                  <CatFollow />
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;