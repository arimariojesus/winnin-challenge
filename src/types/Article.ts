import { ChildrenResponse } from '@/types/Reddit';

export interface Article {
  id: string;

  title: string;
  author: string;
  url: string;
  created: number;

  selftext: string;
  selftext_html: string;

  thumbnail: string;
  url_overridden_by_dest?: string;

  link_flair_text: string | null;
  link_flair_background_color: string;
  link_flair_text_color: 'dark' | 'light';
}

export class ArticleMapper implements Article {
  constructor(props: ChildrenResponse) {
    this.id = props.data.id;
    this.title = props.data.title;
    this.author = props.data.author;
    this.url = props.data.url;
    this.created = props.data.created;
    this.selftext = props.data.selftext;
    this.selftext_html = props.data.selftext_html;
    this.thumbnail = props.data.thumbnail;
    this.url_overridden_by_dest = props.data.url_overridden_by_dest;
    this.link_flair_text = props.data.link_flair_text;
    this.link_flair_background_color = props.data.link_flair_background_color;
    this.link_flair_text_color = props.data.link_flair_text_color;
  }

  id: string;
  title: string;
  author: string;
  url: string;
  created: number;
  selftext: string;
  selftext_html: string;
  thumbnail: string;
  url_overridden_by_dest?: string | undefined;
  link_flair_text: string | null;
  link_flair_background_color: string;
  link_flair_text_color: 'dark' | 'light';
}
