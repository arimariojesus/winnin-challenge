import { HStack } from '@chakra-ui/react';

import { ListingsType } from '@/types/Subreddit';
import { NavButton } from './NavButon';
import { NavItem } from './NavbarModel';

interface NavbarProps {
  items: NavItem[];
  current: NavItem['value'];
  activeColor: string;
  onChange: (value: ListingsType) => void;
}

export const NavbarComponent = ({ items, current, activeColor, onChange }: NavbarProps) => {
  return (
    <HStack as="nav" my={8} justifyContent="center">
      {items.map((item) => (
        <NavButton
          key={item.value}
          activeColor={activeColor}
          isActive={current === item.value}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </NavButton>
      ))}
    </HStack>
  );
};
