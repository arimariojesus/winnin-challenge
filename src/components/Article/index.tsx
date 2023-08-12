import { Card, CardBody, CardHeader, HStack, Heading, Image, Link, Tag, Text, VStack } from '@chakra-ui/react';

import { Article as IArticle } from '@/types/Article';
import { BASE_URL as REDDIT_BASE_URL } from '@/services/api/redditApi';
import { DateUtils, UrlUtils } from '@/utils';
import { ArticleSkeleton } from './ArticleSkeleton';

interface ArticleProps {
  isLoading?: boolean;
  article: IArticle;
}

export const Article = ({ isLoading, article }: ArticleProps) => {
  return !isLoading ? (
    <Link href={REDDIT_BASE_URL + article.permalink} target="_blank" w="100%" _hover={{ textDecor: 'none' }}>
      <Card
        bg="transparent"
        color="brand.white"
        borderRadius={16}
        p={3}
        _hover={{ bg: 'brand.whiteAlpha.50' }}
        pos="relative"
      >
        <CardHeader px={2} py={3}>
          <HStack fontSize={{ base: 'sm', md: 'md' }}>
            <Text fontWeight="semibold">u/{article.author}</Text>
            <Text>&#8226;</Text>
            <Text>{DateUtils.getTimeAgo(Date.now(), article.created)}</Text>
          </HStack>
        </CardHeader>

        <CardBody px={2} py={3}>
          <HStack alignItems="flex-start" spacing={4} justifyContent="space-between">
            <VStack alignItems="flex-start" spacing={6} flex={1}>
              <Heading as="h4" fontSize={{ base: 'md', sm: 'lg', md: '2xl' }}>
                {article.title}
              </Heading>
              {!!article.link_flair_text && (
                <Tag
                  borderRadius="full"
                  bg={article.link_flair_background_color}
                  color={article.link_flair_text_color === 'dark' ? 'brand.black' : 'brand.white'}
                >
                  {article.link_flair_text}
                </Tag>
              )}
            </VStack>
            {UrlUtils.isValidUrl(article.thumbnail) && (
              <Link href={article.url_overridden_by_dest || ''} target="_blank">
                <Image
                  src={article.thumbnail}
                  fallbackSrc="https://via.placeholder.com/184x140"
                  borderRadius={16}
                  width={{ base: 114, md: 184 }}
                  height={{ base: 86, md: 140 }}
                />
              </Link>
            )}
          </HStack>
        </CardBody>
      </Card>
    </Link>
  ) : (
    <ArticleSkeleton />
  );
};
