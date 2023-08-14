import { useSubReddit } from '@/hooks/Subreddit';

import { LogoButton } from './LogoComponent';

export const LogoContainer = () => {
  const { currentSubreddit, onNext } = useSubReddit();

  return (
    <LogoButton onClick={onNext} icon={currentSubreddit.icon}>
      {currentSubreddit.label}
    </LogoButton>
  );
};
