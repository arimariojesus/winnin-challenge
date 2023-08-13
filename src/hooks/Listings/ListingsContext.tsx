import { ListingsType } from '@/types/Subreddit';
import React, { createContext, useState } from 'react';

const DEFAULT_LISTING: ListingsType = 'hot';

interface ListingContextData {
  changeListing: (listingType: ListingsType) => void;
  currentListingType: ListingsType;
}

export const ListingsContext = createContext<ListingContextData | null>(null);

export const ListingsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentListingType, setCurrentListingType] = useState<ListingsType>(DEFAULT_LISTING);

  const changeListing = (listingType: ListingsType) => {
    setCurrentListingType(listingType);
  };

  return (
    <ListingsContext.Provider
      value={{
        changeListing,
        currentListingType,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};
