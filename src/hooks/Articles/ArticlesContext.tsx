import React, { createContext, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Article } from '@/types/Article';
import { ListingsType } from '@/types/Subreddit';
import { GetArticlesBySubRedditResponse, getArticlesBySubReddit } from '@/services/subreddit/subredditOperation';
import { useNavigate, useParams } from 'react-router-dom';
import { DEFAULT_LIMIT } from '@/components/ArticlesList/ArticlesListData';

interface ArticlesContextData {
  articles: Article[];

  isLoading: boolean;
  isFetchingNextPage: boolean;
  isError: boolean;

  hasNextPage: boolean;
  fetchNextPage: () => void;

  currentListingType: ListingsType;
  changeListingType: (listingType: ListingsType) => void;
}

export const ArticlesContext = createContext<ArticlesContextData | null>(null);

const parseArticlesResponse = (responsePages?: GetArticlesBySubRedditResponse[]): Article[] => {
  if (!responsePages) return [];

  const response = responsePages.map((page) => page.articles);

  return response.flat();
};

export const ArticlesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { listingType } = useParams<{ listingType: ListingsType }>();

  const currentListingType = useMemo<ListingsType>(() => listingType || 'hot', [listingType]);

  const { data, isLoading, isFetchingNextPage, isError, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['articles', currentListingType],
    queryFn: ({ pageParam = '' }) =>
      getArticlesBySubReddit('reactjs', { after: pageParam, listingType: currentListingType, limit: DEFAULT_LIMIT }),
    getNextPageParam: (lastPage) => lastPage.after || undefined,
  });

  const articles = useMemo(() => parseArticlesResponse(data?.pages), [data]);

  const changeListingType = (listingType: ListingsType) => {
    navigate('/' + listingType);
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        isLoading,
        isFetchingNextPage,
        isError,
        hasNextPage: !!hasNextPage,
        fetchNextPage,
        currentListingType,
        changeListingType,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
