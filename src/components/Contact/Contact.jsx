import { portfolioData } from '../../data/portfolioData.ru';
import FadeIn from '../FadeIn/FadeIn';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.scss';

const Contact = () => {
  const { contacts } = portfolioData.personal;
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <div className="container">
        <FadeIn direction="up">
          <h2 className="section-title">{t('contact.title')}</h2>
        </FadeIn>
        
        <div className="contact__wrapper">
          <FadeIn direction="up" delay={100}>
            <a href={`mailto:${contacts.email}`} className="contact__card" target="_blank" rel="noreferrer">
              <div className="contact__icon">📧</div>
              <div className="contact__info">
                <h3 className="contact__label">{t('contact.email')}</h3>
                <p className="contact__value">{contacts.email}</p>
              </div>
              <div className="contact__arrow">→</div>
            </a>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <a href={contacts.telegram} className="contact__card" target="_blank" rel="noreferrer">
              <div className="contact__icon">✈️</div>
              <div className="contact__info">
                <h3 className="contact__label">{t('contact.telegram')}</h3>
                <p className="contact__value">@fx_ssnus</p>
              </div>
              <div className="contact__arrow">→</div>
            </a>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <a href={contacts.github} className="contact__card" target="_blank" rel="noreferrer">
              <div className="contact__icon">💻</div>
              <div className="contact__info">
                <h3 className="contact__label">{t('contact.github')}</h3>
                <p className="contact__value">{t('contact.viewCode')}</p>
              </div>
              <div className="contact__arrow">→</div>
            </a>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={400}>
          <p className="contact__note">
            {t('contact.note')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;