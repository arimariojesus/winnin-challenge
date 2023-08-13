import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import LogoButton from '@/components/LogoButton';

const Header = () => {
  return (
    <Flex
      as="header"
      p={6}
      bg="brand.gray.900"
      pos="sticky"
      top="0"
      zIndex="sticky"
      justifyContent="center"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor="brand.whiteAlpha.100"
    >
      <LogoButton />
    </Flex>
  );
};

export default memo(Header);
