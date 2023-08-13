import { useSubReddit } from '@/hooks/Subreddit';

import { LogoButton } from './LogoComponent';

export const LogoContainer = () => {
  const { current, onNext } = useSubReddit();

  return (
    <LogoButton onClick={onNext} icon={current.icon}>
      {current.label}
    </LogoButton>
  );
};
