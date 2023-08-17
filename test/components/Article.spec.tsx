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

  return <Article {...componentProps} />;
};

describe('Article Component', () => {
  it('should renders article with correct author and title', () => {
    render(makeSut());

    expect(screen.getByText(mockArticle.author)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
  });

  it('should renders article link with correct href', () => {
    render(makeSut());

    const articleLink = screen.getByRole('link', { name: mockArticle.title });

    expect(articleLink).toHaveAttribute('href', ArticleUtils.getArticleUrl(mockArticle.permalink));
  });

  it('should renders article thumbnail if has a valid thumbnail', () => {
    render(makeSut());

    const thumbnail = screen.getByRole('img', { name: mockArticle.title });

    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail).toHaveAttribute('src', mockArticle.thumbnail);
  });

  it('should renders correct domain', () => {
    const { rerender } = render(makeSut());

    let domainElement = screen.getByText(mockArticle.subreddit_name);

    expect(domainElement).toBeInTheDocument();

    const externalDomainArticle = {
      ...mockArticle,
      domain: 'external-domain',
    };

    rerender(makeSut({ article: externalDomainArticle }));

    domainElement = screen.getByText(externalDomainArticle.domain);

    expect(domainElement).toBeInTheDocument();
  });
});
