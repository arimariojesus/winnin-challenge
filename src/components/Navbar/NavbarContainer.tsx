import { useListings } from '@/hooks/Listings';
import { useSubReddit } from '@/hooks/Subreddit';

import { NavbarComponent } from './NavbarComponent';
import { navItems } from './NavbarData';

export const NavbarContainer = () => {
  const { changeListing, currentListingType } = useListings();
  const { currentSubreddit } = useSubReddit();

  return (
    <NavbarComponent
      items={navItems}
      current={currentListingType}
      activeColor={currentSubreddit.color}
      onChange={changeListing}
    />
  );
};
