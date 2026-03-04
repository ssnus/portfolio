import { useLanguage } from '../../context/LanguageContext';
import './LangSwitcher.scss';

const LangSwitcher = () => {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <button 
      className="lang-switcher" 
      onClick={toggleLang}
      aria-label={`Switch to ${lang === 'ru' ? 'English' : 'Russian'}`}
    >
      <span className={`lang-option ${lang === 'ru' ? 'active' : ''}`}>
        {t('lang.ru')}
      </span>
      <span className="lang-divider">|</span>
      <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>
        {t('lang.en')}
      </span>
    </button>
  );
};

export default LangSwitcher;