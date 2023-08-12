import { extendTheme } from '@chakra-ui/react';

import colors from './colors';

const theme = extendTheme({
  colors,
  styles: {
    global: {
      '#root, body': {
        bg: 'brand.gray.000',
        color: 'white',
        minHeight: '100%',
      },
    },
  },
});

export default theme;
