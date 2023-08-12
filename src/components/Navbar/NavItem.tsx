import { Button } from '@chakra-ui/react';

interface NavItemProps {
  children: React.ReactNode;
  isActive?: boolean;
}

export const NavItem = ({ children, isActive }: NavItemProps) => {
  return (
    <Button
      w="200px"
      p={2}
      color="brand.white"
      bg={isActive ? 'brand.react' : 'brand.gray.600'}
      _hover={{ opacity: 0.8 }}
      _active={{ opacity: 0.9 }}
    >
      {children}
    </Button>
  );
};
