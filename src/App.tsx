import { Box, Container } from '@chakra-ui/react';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ArticlesList from '@/components/ArticlesList';

function App() {
  return (
    <Box w="100%">
      <Header />

      <Container maxW="container.lg">
        <Navbar />

        <ArticlesList />
      </Container>
    </Box>
  );
}

export default App;
