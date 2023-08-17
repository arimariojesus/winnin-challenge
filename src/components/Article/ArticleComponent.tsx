import { Box, Flex, HStack, Image, Link, Text } from '@chakra-ui/react';

import { Article } from '@/types/Article';
import { DateUtils, ArticleUtils } from '@/utils';

interface ArticleComponentProps {
  article: Article;
}

export const ArticleComponent = ({ article }: ArticleComponentProps) => {
  return (
    <Box w="full" borderTopWidth="1px" borderTopColor="#000" py="12px">
      <HStack w="full" spacing="12px">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fallbackSrc="/images/default-image.jpg"
          fallbackStrategy="onError"
          borderRadius="8px"
          objectFit="cover"
          bg="gray.500"
          w="77px"
          h="77px"
        />

        <Flex flexDirection="column" alignItems="flex-start" flex={1} overflow="hidden">
          <Link
            href={ArticleUtils.getArticleUrl(article.permalink)}
            target="_blank"
            fontSize="20px"
            fontWeight={600}
            maxW="100%"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {article.title}
          </Link>

          <Text color="gray.700" fontWeight={400}>
            enviado há {DateUtils.getUnitTimeDiff(Date.now(), article.created)} por&nbsp;
            <Link href={ArticleUtils.getAuthorUrl(article.author)} color="primary.500" target="_blank">
              {article.author}
            </Link>
          </Text>

          <Box mt="9px">
            <Link href={article.url} target="_blank" fontWeight={700}>
              {ArticleUtils.isSelfDomain(article.domain) ? article.subreddit_name : article.domain}
            </Link>
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
};
