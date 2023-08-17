import { ChildrenResponse } from '@/types/Subreddit';

export interface Article {
  id: string;

  title: string;
  author: string;
  url: string;
  permalink: string;
  created: number;
  domain: string;
  subreddit_name: string;

  selftext: string;
  selftext_html: string;

  thumbnail: string;
  url_overridden_by_dest?: string;

  link_flair_text: string | null;
  link_flair_background_color: string;
  link_flair_text_color: 'dark' | 'light';
}

export class ArticleMapper {
  static childrenToArticle(children: ChildrenResponse): Article {
    const { data } = children;
    return {
      id: data.id,
      title: data.title,
      author: data.author,
      url: data.url,
      permalink: data.permalink,
      created: data.created * 1000,
      domain: data.domain,
      subreddit_name: data.subreddit_name_prefixed,
      selftext: data.selftext,
      selftext_html: data.selftext_html,
      thumbnail: data.thumbnail,
      url_overridden_by_dest: data.url_overridden_by_dest,
      link_flair_text: data.link_flair_text,
      link_flair_background_color: data.link_flair_background_color,
      link_flair_text_color: data.link_flair_text_color,
    };
  }
}
