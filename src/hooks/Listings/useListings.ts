import { useContext } from 'react';

import { ListingsContext } from './ListingsContext';

export const useListings = () => {
  const context = useContext(ListingsContext);

  if (!context) {
    throw new Error('You must use useListings inside ListingsProvider');
  }

  return context;
};
