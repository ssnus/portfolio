import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage(); // ← Получаем функцию перевода

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <span className="logo-icon">&lt;/&gt;</span>
          <span className="logo-text">{t('header.logo')}</span>
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav__list">
            <li><a href="#home" className="nav__link" onClick={(e) => handleNavClick(e, 'home')}>{t('nav.home')}</a></li>
            <li><a href="#projects" className="nav__link" onClick={(e) => handleNavClick(e, 'projects')}>{t('nav.projects')}</a></li>
            <li><a href="#skills" className="nav__link" onClick={(e) => handleNavClick(e, 'skills')}>{t('nav.skills')}</a></li>
            <li><a href="#contact" className="nav__link" onClick={(e) => handleNavClick(e, 'contact')}>{t('nav.contact')}</a></li>
          </ul>
        </nav>

        <div className="header__actions">
          <LangSwitcher />
          
          <a href="https://t.me/fx_ssnus" className="btn btn--outline" target="_blank" rel="noreferrer">
            {t('header.telegram')}
          </a>
          <a href="mailto:shahova.alina@list.ru" className="btn btn--primary">
            {t('header.hireMe')}
          </a>
        </div>

        <button className="header__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;