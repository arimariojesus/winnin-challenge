import { useContext } from 'react';

import { ArticlesContext } from './ArticlesContext';

export const useArticles = () => {
  const context = useContext(ArticlesContext);

  if (!context) {
    throw new Error('You must use useArticles inside ArticlesProvider');
  }

  return context;
};
