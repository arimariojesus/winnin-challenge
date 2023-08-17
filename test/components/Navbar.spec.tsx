import { render, fireEvent, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';
// import { NavItem } from '@/components/Navbar/NavbarModel';
import React from 'react';
import { navItems } from '@/components/Navbar/NavbarData';

// const item1 = new NavItem({ label: 'Test 1', value: 'hot' });
// const item2 = new NavItem({ label: 'Test 2', value: 'new' });
// const item3 = new NavItem({ label: 'Test 3', value: 'rising' });
const item1 = navItems[0];
const item2 = navItems[1];

const mockItems = [...navItems];

type ComponentProps = React.ComponentProps<typeof Navbar>;

const mockProps: ComponentProps = {
  current: item1.value,
  onChange: () => {},
};

const makeSut = (props?: Partial<ComponentProps>) => {
  return <Navbar {...{ ...mockProps, ...props }} />;
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

  it('should calls onChange when an item is clicked', () => {
    const handleChange = jest.fn();

    render(makeSut({ onChange: handleChange }));

    const itemToClick = screen.getByRole('button', { name: item2.label });
    fireEvent.click(itemToClick);

    expect(handleChange).toHaveBeenCalledWith(item2.value);
  });
});
