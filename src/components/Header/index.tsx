import { ReactIcon } from '@/assets/icons';
import { Flex, HStack, Heading, Text } from '@chakra-ui/react';

const CustomLogo = () => {
  return (
    <HStack>
      <ReactIcon />
      <Heading>
        REACT
        <Text as="span" color="brand.winnin">
          JS
        </Text>
      </Heading>
    </HStack>
  );
};

export const Header = () => {
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
      <CustomLogo />
    </Flex>
  );
};
