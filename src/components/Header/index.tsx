import { memo } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex as="header" p={6} bg="primary.500" justifyContent="center" alignItems="center">
      <Heading as="h1" fontWeight={700} color="white">
        REACT
        <Text as="span" color="yellow.500">
          JS
        </Text>
      </Heading>
    </Flex>
  );
};

export default memo(Header);
