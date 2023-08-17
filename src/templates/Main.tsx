import { Button } from '@chakra-ui/react';

import Navbar from '@/components/Navbar';
import ArticlesList from '@/components/ArticlesList';
import { ArticleSkeleton } from '@/components/Article';
import { useArticles } from '@/hooks/Articles';
import { DEFAULT_LIMIT } from '@/services/subreddit/subredditData';

function Main() {
  const { articles, isLoading, hasNextPage, isFetchingNextPage, currentListingType, fetchNextPage, changeListingType } =
    useArticles();

  return (
    <>
      <Navbar current={currentListingType} onChange={changeListingType} />

      <ArticlesList articles={articles} />

      {isLoading && Array.from({ length: DEFAULT_LIMIT }).map((_, index) => <ArticleSkeleton key={index} />)}

      <Button
        w="full"
        colorScheme="primary"
        fontWeight={600}
        isLoading={isFetchingNextPage}
        isDisabled={!hasNextPage}
        onClick={() => fetchNextPage()}
      >
        + Ver mais
      </Button>
    </>
  );
}

export default Main;
