import { HStack } from '@chakra-ui/react';

import { ListingsType } from '@/types/Subreddit';
import { NavButton } from './NavButon';
import { NavItem } from './NavbarModel';
import { navItems } from './NavbarData';

interface NavbarProps {
  current: NavItem['value'];
  onChange: (value: ListingsType) => void;
}

const Navbar = ({ current, onChange }: NavbarProps) => {
  return (
    <HStack as="nav" my={6} justifyContent="center">
      {navItems.map((item) => (
        <NavButton key={item.value} isActive={current === item.value} onClick={() => onChange(item.value)}>
          {item.label}
        </NavButton>
      ))}
    </HStack>
  );
};

export default Navbar;
