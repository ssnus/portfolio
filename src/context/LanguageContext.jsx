import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return saved || 'ru';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[lang];
    
    for (const k of keys) {
      result = result?.[k];
      if (!result) return key; 
    }
    
    return result;
  };

  const toggleLang = () => {
    setLang(prev => prev === 'ru' ? 'en' : 'ru');
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};