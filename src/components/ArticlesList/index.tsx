import { VStack } from '@chakra-ui/react';

import Article from '@/components/Article';
import { Article as IArticle } from '@/types/Article';

interface ArticlesListProps {
  articles: IArticle[];
}

const ArticlesList = ({ articles }: ArticlesListProps) => {
  return <VStack spacing={0}>{articles?.map((article) => <Article key={article.id} article={article} />)}</VStack>;
};

export default ArticlesList;
