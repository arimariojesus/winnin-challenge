import redditApi from '@/services/api/redditApi';
import { ListingsType, SubredditCommonResponse } from '@/types/Subreddit';

export interface GetSubredditParams {
  subreddit: string;
  listingType: ListingsType;
  after?: string;
  before?: string;
  limit?: number;
}

export const getSubreddit = async ({ subreddit, listingType, after, before, limit }: GetSubredditParams) => {
  const { data } = await redditApi.get<SubredditCommonResponse>(`/r/${subreddit}/${listingType}.json`, {
    params: {
      after,
      before,
      limit,
    },
  });

  return data;
};
