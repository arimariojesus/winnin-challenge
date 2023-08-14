import { Button, Center, Divider, Text, VStack } from '@chakra-ui/react';

import Article, { ArticleSkeleton } from '@/components/Article';
import { Article as IArticle } from '@/types/Article';

import { DEFAULT_LIMIT } from './ArticlesListData';

interface ArticlesListProps {
  articles: IArticle[];
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
}

const skeletonLoading = Array.from({ length: DEFAULT_LIMIT }).map((_, index) => <ArticleSkeleton key={index} />);

const getSkeletonLoading = (isLoading: boolean) => {
  if (isLoading) {
    return skeletonLoading;
  }

  return [];
};

export const ArticlesListComponent = ({ articles, isLoading, isError, onRetry }: ArticlesListProps) => {
  if (isError) {
    return (
      <Center my={40} gap={4} flexDirection="column">
        <Text fontWeight="bold" fontSize="xl" color="brand.white" textAlign="center">
          Ops! Não foi possível carregar as informações.
          <br />
          Por favor, tente novamente!
        </Text>
        {onRetry && (
          <Button variant="link" color="brand.winnin-light" onClick={onRetry}>
            Tentar novamente
          </Button>
        )}
      </Center>
    );
  }

  return (
    <VStack spacing={3} my={8} divider={<Divider />}>
      {articles
        ?.map((article) => <Article key={article.id} article={article} />)
        .concat(...getSkeletonLoading(!!isLoading))}
    </VStack>
  );
};
