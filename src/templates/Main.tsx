import { Button } from '@chakra-ui/react';

import Navbar from '@/components/Navbar';
import ArticlesList from '@/components/ArticlesList';
import { useArticles } from '@/hooks/Articles';
import { DEFAULT_LIMIT } from '@/components/ArticlesList/ArticlesListData';
import { ArticleSkeleton } from '@/components/Article';

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
