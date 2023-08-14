import { render, fireEvent, screen } from '@testing-library/react';
import { NavbarComponent } from '@/components/Navbar/NavbarComponent';
import { NavItem } from '@/components/Navbar/NavbarModel';
import React from 'react';

const item1 = new NavItem({ label: 'Test 1', value: 'hot' });
const item2 = new NavItem({ label: 'Test 2', value: 'new' });
const item3 = new NavItem({ label: 'Test 3', value: 'rising' });

const mockItems = [item1, item2, item3];

type ComponentProps = React.ComponentProps<typeof NavbarComponent>;

const mockProps: ComponentProps = {
  items: mockItems,
  current: item1.value,
  activeColor: 'blue',
  onChange: () => {},
};

const makeSut = (props?: Partial<ComponentProps>) => {
  return <NavbarComponent {...{ ...mockProps, ...props }} />;
};

describe('NavbarComponent', () => {
  it('should renders all items', () => {
    render(makeSut());

    mockItems.forEach((item) => {
      const itemElement = screen.getByRole('button', { name: item.label });
      expect(itemElement).toBeInTheDocument();
    });
  });

  it('should highlights the active item', () => {
    render(makeSut({ current: item2.value }));

    const activeItem = screen.getByRole('button', { current: true });
    expect(activeItem).toHaveTextContent(item2.label);
  });

  it('should active item has the correct background color', () => {
    const { rerender } = render(makeSut({ activeColor: 'blue' }));

    let activeItem = screen.getByRole('button', { current: true });
    expect(activeItem).toHaveStyle({
      'background-color': 'blue',
    });

    rerender(makeSut({ activeColor: 'red' }));

    activeItem = screen.getByRole('button', { current: true });
    expect(activeItem).toHaveStyle({
      'background-color': 'red',
    });
  });

  it('should calls onChange when an item is clicked', () => {
    const handleChange = jest.fn();

    render(makeSut({ onChange: handleChange }));

    const itemToClick = screen.getByRole('button', { name: item2.label });
    fireEvent.click(itemToClick);

    expect(handleChange).toHaveBeenCalledWith(item2.value);
  });
});
