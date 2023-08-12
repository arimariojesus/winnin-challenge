export interface ChildrenResponse {
  data: {
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
  };
}

export interface RedditCommonResponse {
  data: {
    after: string | null;
    before: string | null;
    children: ChildrenResponse[];
  };
}
