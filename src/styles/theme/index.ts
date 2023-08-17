import { extendTheme } from '@chakra-ui/react';

import colors from './colors';

const theme = extendTheme({
  colors,
  styles: {
    global: {
      '#root, body': {
        bg: 'white',
        color: 'black',
        minHeight: '100vh',
      },
    },
  },
  fonts: {
    body: 'Mulish, sans-serif',
    heading: 'Mulish, sans-serif',
    text: 'Mulish, sans-serif',
  },
});

export default theme;
