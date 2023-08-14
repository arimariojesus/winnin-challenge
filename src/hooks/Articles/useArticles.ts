import { useInfiniteQuery } from '@tanstack/react-query';

import {
  GetArticlesBySubRedditParams,
  GetArticlesBySubRedditResponse,
  getArticlesBySubReddit,
} from '@/services/subreddit/subredditOperation';
import { Article } from '@/types/Article';

type UseArticlesParams = Pick<GetArticlesBySubRedditParams, 'listingType' | 'limit'>;

const parseArticlesResponse = (responsePages?: GetArticlesBySubRedditResponse[]): Article[] => {
  if (!responsePages) return [];

  const response = responsePages.map((page) => page.articles);

  return response.flat();
};

export const useArticles = (subreddit: string, params: UseArticlesParams) => {
  const { data, isLoading, isFetchingNextPage, isError, hasNextPage, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['articles', subreddit, params.listingType],
    queryFn: ({ pageParam = undefined }) => getArticlesBySubReddit(subreddit, { ...params, after: pageParam }),
    getNextPageParam: (lastPage) => lastPage.after,
  });

  return {
    articles: parseArticlesResponse(data?.pages),
    isLoading: isLoading || isFetchingNextPage,
    isError,
    hasNextPage,
    refetch,
    fetchNextPage,
  };
};
