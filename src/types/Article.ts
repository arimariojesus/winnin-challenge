import { ChildrenResponse } from '@/types/Subreddit';

export interface Article {
  id: string;

  title: string;
  author: string;
  url: string;
  permalink: string;
  created: number;

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
    return {
      id: children.data.id,
      title: children.data.title,
      author: children.data.author,
      url: children.data.url,
      permalink: children.data.permalink,
      created: children.data.created * 1000,
      selftext: children.data.selftext,
      selftext_html: children.data.selftext_html,
      thumbnail: children.data.thumbnail,
      url_overridden_by_dest: children.data.url_overridden_by_dest,
      link_flair_text: children.data.link_flair_text,
      link_flair_background_color: children.data.link_flair_background_color,
      link_flair_text_color: children.data.link_flair_text_color,
    };
  }
}
