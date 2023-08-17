import { BASE_URL as REDDIT_BASE_URL } from '@/services/api/redditApi';

export class ArticleUtils {
  static getAuthorUrl(author: string) {
    return `${REDDIT_BASE_URL}/user/${author}`;
  }

  static getArticleUrl(permalink: string) {
    return REDDIT_BASE_URL + permalink;
  }

  static isSelfDomain(domain: string) {
    return domain.includes('self');
  }
}
