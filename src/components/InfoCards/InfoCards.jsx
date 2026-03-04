import FadeIn from '../FadeIn/FadeIn';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { useLanguage } from '../../context/LanguageContext';
import './InfoCards.scss';

const InfoCards = () => {
  const data = usePortfolioData(); 
  const { lang } = useLanguage();  

  return (
    <section className="info-cards">
      <div className="container">
        <div className="info-cards__grid">
          {data.infoCards.map((card, index) => (
            <FadeIn key={index} direction="up" delay={index * 150}>
              <div className="info-card">
                <div className="info-card__number">{card.number}</div>
                <h3 className="info-card__title">{card.title}</h3>
                <p className="info-card__description">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;