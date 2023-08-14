import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from '@/App';
import { ListingsProvider } from '@/hooks/Listings';
import { SubredditProvider } from '@/hooks/Subreddit';
import theme from '@/styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SubredditProvider>
          <ListingsProvider>
            <App />
          </ListingsProvider>
        </SubredditProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
