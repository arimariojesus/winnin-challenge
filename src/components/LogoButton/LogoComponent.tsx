import { Button, ButtonProps, HStack, Heading, Text, keyframes } from '@chakra-ui/react';

const shakingAnimation =
  keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
` + ' infinite 1s';

interface LogoButtonProps extends ButtonProps {
  icon: JSX.Element;
}

export const LogoButton = ({ children, icon, ...props }: LogoButtonProps) => {
  return (
    <Button
      variant="unstyled"
      {...props}
      _hover={{
        animation: shakingAnimation,
      }}
    >
      <HStack>
        {icon}
        <Heading>
          {children}
          <Text as="span" color="brand.winnin">
            JS
          </Text>
        </Heading>
      </HStack>
    </Button>
  );
};
