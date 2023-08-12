import { Box, Container, Divider, VStack } from '@chakra-ui/react';

import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Article } from '@/components/Article';
import { hotJsonData } from '@/mocks';
import { ArticleMapper } from '@/types/Article';
import { ChildrenResponse } from '@/types/Reddit';

const articles = hotJsonData.data.children.map((children) => new ArticleMapper(children as ChildrenResponse));

function App() {
  return (
    <Box w="100%">
      <Header />

      <Container maxW="container.lg">
        <Navbar />

        <VStack spacing={3} my={8} divider={<Divider />}>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
