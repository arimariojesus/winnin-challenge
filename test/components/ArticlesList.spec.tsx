import React from 'react';
import { render, screen } from '@testing-library/react';

import ArticlesList from '@/components/ArticlesList';
import { mockArticle } from '@/mocks';

const mockArticles = [mockArticle];

type ComponentProps = React.ComponentProps<typeof ArticlesList>;

const mockProps: ComponentProps = {
  articles: mockArticles,
};

const makeSut = (props?: Partial<ComponentProps>) => {
  return <ArticlesList {...{ ...mockProps, ...props }} />;
};

describe('ArticlesList', () => {
  it('should renders articles correctly', () => {
    render(makeSut());

    mockArticles.forEach((article) => {
      const articleTitle = screen.getByText(article.title);
      const articleAuthor = screen.getByText(article.author);

      expect(articleTitle).toBeInTheDocument();
      expect(articleAuthor).toBeInTheDocument();
    });
  });
});
