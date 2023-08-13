import { BASE_URL as REDDIT_BASE_URL } from '@/services/api/redditApi';

export class ArticleUtils {
  static getRedditAuthor(author: string) {
    return `u/${author}`;
  }

  static getArticleUrl(permalink: string) {
    return REDDIT_BASE_URL + permalink;
  }
}
