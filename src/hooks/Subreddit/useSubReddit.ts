import { useContext } from 'react';

import { SubredditContext } from './SubredditContext';

export const useSubReddit = () => {
  const context = useContext(SubredditContext);

  if (!context) {
    throw new Error('You must use useSubreddit inside SubredditProvider');
  }

  return context;
};
