import { Box, Container } from '@chakra-ui/react';

import Header from '@/components/Header';
import { ArticlesProvider } from '@/hooks/Articles/ArticlesContext';
import Main from '@/templates/Main';

function App() {
  return (
    <ArticlesProvider>
      <Box w="100%" pb={8}>
        <Header />

        <Container maxW="container.xl">
          <Main />
        </Container>
      </Box>
    </ArticlesProvider>
  );
}

export default App;
