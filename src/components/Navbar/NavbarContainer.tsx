import { useListings } from '@/hooks/Listings';
import { useSubReddit } from '@/hooks/Subreddit';

import { NavbarComponent } from './NavbarComponent';
import { navItems } from './NavbarData';

export const NavbarContainer = () => {
  const { changeListing, currentListingType } = useListings();
  const { current } = useSubReddit();

  return (
    <NavbarComponent
      items={navItems}
      current={currentListingType}
      activeColor={current.color}
      onChange={changeListing}
    />
  );
};
