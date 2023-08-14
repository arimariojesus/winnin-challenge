import { Button } from '@chakra-ui/react';

interface NavButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  activeColor?: string;
  onClick?: () => void;
}

export const NavButton = ({ children, isActive, activeColor, onClick }: NavButtonProps) => {
  return (
    <Button
      w="200px"
      p={2}
      color="brand.white"
      bg={isActive ? activeColor : 'brand.gray.600'}
      aria-current={isActive}
      _hover={{ opacity: 0.8 }}
      _active={{ opacity: 0.9 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
