import { Button } from '@chakra-ui/react';

interface NavButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  activeColor?: string;
  onClick?: () => void;
}

export const NavButton = ({ children, isActive, onClick }: NavButtonProps) => {
  return (
    <Button
      w="200px"
      py="12px"
      color="white"
      bg={isActive ? 'primary.500' : 'gray.300'}
      fontSize="16px"
      fontWeight={600}
      aria-current={isActive}
      _hover={{ opacity: 0.8 }}
      _active={{ opacity: 0.9 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
