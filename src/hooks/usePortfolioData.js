import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData as ruData } from '../data/portfolioData.ru';
import { portfolioData as enData } from '../data/portfolioData.en';

export const usePortfolioData = () => {
  const { lang } = useLanguage();

  const data = useMemo(() => {
    return lang === 'en' ? enData : ruData;
  }, [lang]);
  
  return data;
};