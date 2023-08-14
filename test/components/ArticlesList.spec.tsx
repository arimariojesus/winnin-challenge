import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ArticlesListComponent } from '@/components/ArticlesList/ArticlesListComponent';
import { mockArticle } from '@/mocks';

const mockArticles = [mockArticle];

type ComponentProps = React.ComponentProps<typeof ArticlesListComponent>;

const mockProps: ComponentProps = {
  articles: mockArticles,
  isLoading: false,
  isError: false,
  onRetry: () => {},
};

const makeSut = (props?: Partial<ComponentProps>) => {
  return <ArticlesListComponent {...{ ...mockProps, ...props }} />;
};

describe('ArticlesListComponent', () => {
  it('should renders articles correctly', () => {
    render(makeSut());

    mockArticles.forEach((article) => {
      const articleTitle = screen.getByRole('heading', { name: article.title });
      expect(articleTitle).toBeInTheDocument();
    });
  });

  it('should renders loading skeletons when isLoading is true', () => {
    render(makeSut({ isLoading: true }));
    const skeletonElements = screen.getAllByRole('alert', { busy: true });

    skeletonElements.forEach((skeletonElement) => {
      expect(skeletonElement).toBeInTheDocument();
    });
  });

  it('should renders error message when isError is true', () => {
    render(makeSut({ isError: true }));

    const errorMessage = screen.getByText(/Ops! Não foi possível carregar as informações/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('should calls onRetry when isError is true and click on retry button', () => {
    const mockRetry = jest.fn();
    render(makeSut({ isError: true, onRetry: mockRetry }));

    const retryButton = screen.getByRole('button', { name: /Tentar novamente/i });
    fireEvent.click(retryButton);
    expect(mockRetry).toHaveBeenCalled();
  });

  it('should does not render retry button when onRetry is not provided', () => {
    render(makeSut());
    const retryButton = screen.queryByRole('button', { name: /Tentar novamente/i });
    expect(retryButton).not.toBeInTheDocument();
  });
});
