import { render, screen } from '@testing-library/react';

import Article from '@/components/Article';
import { mockArticle } from '@/mocks';
import { ArticleUtils } from '@/utils';

type ArticleProps = React.ComponentProps<typeof Article>;
type SutProps = Partial<ArticleProps>;

const makeSut = (props?: SutProps) => {
  const propsMock: ArticleProps = {
    article: mockArticle,
  };

  const componentProps = {
    ...propsMock,
    ...props,
  };

  render(<Article {...componentProps} />);

  return {
    ...componentProps,
  };
};

describe('Article Component', () => {
  it('should renders article with correct author and title', () => {
    makeSut();

    expect(screen.getByText(ArticleUtils.getRedditAuthor(mockArticle.author))).toBeInTheDocument();
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
  });

  it('should renders link flair tag if available', () => {
    makeSut();

    const tagElement = screen.getByText(mockArticle.link_flair_text as string);

    expect(tagElement).toBeInTheDocument();
  });

  it('should renders link flair tag with correct styles', () => {
    makeSut();

    const tagElement = screen.getByText(mockArticle.link_flair_text as string);

    expect(tagElement).toHaveStyle({
      'background-color': mockArticle.link_flair_background_color,
      color: 'brand.white',
    });

    makeSut({ article: { ...mockArticle, link_flair_text_color: 'dark' } });

    expect(tagElement).toHaveStyle({
      'background-color': mockArticle.link_flair_background_color,
      color: 'brand.black',
    });
  });

  it('should renders article thumbnail if valid URL', () => {
    makeSut();

    const thumbnail = screen.getByRole('img');

    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail).toHaveAttribute('src', mockArticle.thumbnail);
  });

  it('should not renders thumbnail if URL is not valid', () => {
    const invalidThumbnailArticle = {
      ...mockArticle,
      thumbnail: 'invalid-url',
    };

    makeSut({ article: invalidThumbnailArticle });

    const fallbackThumbnail = screen.queryByRole('img');

    expect(fallbackThumbnail).not.toBeInTheDocument();
  });

  it('should renders thumbnail link with correct href if overridden', () => {
    makeSut();

    const thumbnailLink = screen.getByRole('link', { name: 'Thumbnail' });

    expect(thumbnailLink).toHaveAttribute('href', mockArticle.url_overridden_by_dest);
  });

  it('should renders article link with correct href', () => {
    makeSut();

    const articleLink = screen.getByRole('link', { description: mockArticle.title });

    expect(articleLink).toHaveAttribute('href', ArticleUtils.getArticleUrl(mockArticle.permalink));
  });
});
