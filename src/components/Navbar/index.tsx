import { HStack } from '@chakra-ui/react';

import { NavItem } from './NavItem';

export const Navbar = () => {
  return (
    <HStack as="nav" my={8} justifyContent="center">
      <NavItem isActive>Hot</NavItem>
      <NavItem>News</NavItem>
      <NavItem>Rising</NavItem>
    </HStack>
  );
};
