import { Skeleton, Stack } from '@chakra-ui/react';

export const ArticleSkeleton = () => {
  return (
    <Stack direction="row" w="full" py="12px">
      <Skeleton borderRadius="lg" w="77px" h="77px" />

      <Stack direction="column" spacing={3} flex={1}>
        <Stack direction="column" spacing={1}>
          <Skeleton borderRadius="lg" w="70%" h="20px" />
          <Skeleton borderRadius="lg" w="50%" h="20px" />
        </Stack>
        <Skeleton borderRadius="lg" w="20%" h="20px" />
      </Stack>
    </Stack>
  );
};
