import { Article, ArticleMapper } from '@/types/Article';

import { GetSubredditParams, getSubreddit } from './subredditService';

export type GetArticlesBySubRedditParams = Omit<GetSubredditParams, 'subreddit'>;

export type GetArticlesBySubRedditResponse = {
  articles: Article[];
  after: string | null;
  before: string | null;
};

export const getArticlesBySubReddit = async (
  subreddit: string,
  params: GetArticlesBySubRedditParams,
): Promise<GetArticlesBySubRedditResponse> => {
  const { data } = await getSubreddit({ subreddit, ...params });

  const { children, after, before } = data;

  const articles = children.map(ArticleMapper.childrenToArticle);

  return {
    articles,
    after,
    before,
  };
};
