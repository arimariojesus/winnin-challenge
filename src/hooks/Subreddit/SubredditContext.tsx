import React, { createContext, useState } from 'react';

import { SubredditItem } from '@/types/Subreddit';
import { SUBREDDIT_ITEMS } from './SubredditContextData';

interface ListingContextData {
  onNext: () => void;
  current: SubredditItem;
}

export const SubredditContext = createContext<ListingContextData | null>(null);

export const SubredditProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [current, setCurrent] = useState(SUBREDDIT_ITEMS[0]);

  const onNext = () => {
    setCurrent((prev) => {
      const last = SUBREDDIT_ITEMS.at(-1);

      if (last?.id === prev.id) {
        return SUBREDDIT_ITEMS[0];
      }

      const nextIndex = SUBREDDIT_ITEMS.findIndex((item) => item.id === prev.id);
      const nextItem = SUBREDDIT_ITEMS.at(nextIndex + 1);

      return nextItem ?? prev;
    });
  };

  return (
    <SubredditContext.Provider
      value={{
        onNext,
        current,
      }}
    >
      {children}
    </SubredditContext.Provider>
  );
};
