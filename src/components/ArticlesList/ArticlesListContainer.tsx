import { memo, useRef } from 'react';

import { useListings } from '@/hooks/Listings';
import { useSubReddit } from '@/hooks/Subreddit';
import { useArticles } from '@/hooks/Articles';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { ArticlesListComponent } from './ArticlesListComponent';
import { DEFAULT_LIMIT } from './ArticlesListData';

const ArticlesListContainer = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  const { currentListingType } = useListings();
  const { currentSubreddit } = useSubReddit();
  const { articles, isLoading, isError, hasNextPage, refetch, fetchNextPage } = useArticles(currentSubreddit.value, {
    listingType: currentListingType,
    limit: DEFAULT_LIMIT,
  });

  useIntersectionObserver(sentinelRef, {
    rootMargin: '150px',
    callback: () => fetchNextPage(),
  });

  return (
    <>
      <ArticlesListComponent
        articles={articles}
        isLoading={isLoading}
        isError={isError}
        onRetry={!hasNextPage ? refetch : fetchNextPage}
      />
      <div id="sentinel" ref={sentinelRef} />
    </>
  );
};

export default memo(ArticlesListContainer);
