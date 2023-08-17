export interface ChildrenResponse {
  data: {
    id: string;

    title: string;
    author: string;
    url: string;
    permalink: string;
    created: number;
    domain: string;

    selftext: string;
    selftext_html: string;

    thumbnail: string;
    url_overridden_by_dest?: string;
    subreddit_name_prefixed: string;

    link_flair_text: string | null;
    link_flair_background_color: string;
    link_flair_text_color: 'dark' | 'light';
  };
}

export type ListingsType = 'hot' | 'new' | 'rising';

export interface SubredditCommonResponse {
  data: {
    after: string | null;
    before: string | null;
    children: ChildrenResponse[];
  };
}

export enum SUBREDDIT_TYPE {
  REACT,
  VUE,
  ANGULAR,
}

export class SubredditItem {
  constructor(props: SubredditItem) {
    this.id = props.id;
    this.label = props.label;
    this.value = props.value;
    this.icon = props.icon;
    this.color = props.color;
  }

  public id: SUBREDDIT_TYPE;
  public label: string;
  public value: string;
  public icon: JSX.Element;
  public color: string;
}
