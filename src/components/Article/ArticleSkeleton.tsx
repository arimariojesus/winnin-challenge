import { Skeleton, VStack } from '@chakra-ui/react';

export const ArticleSkeleton = () => {
  return (
    <VStack
      spacing={6}
      w="100%"
      p={6}
      borderRadius={16}
      alignItems="flex-start"
      bg="brand.whiteAlpha.50"
      role="alert"
      aria-busy="true"
    >
      <Skeleton borderRadius="lg" w="140px" h="20px" />
      <Skeleton borderRadius="lg" w="100%" h="80px" />
      <Skeleton borderRadius="lg" w="70px" h="20px" />
    </VStack>
  );
};
