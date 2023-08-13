import { AngularIcon, ReactIcon, VueIcon } from '@/assets/icons';
import { SUBREDDIT_TYPE, SubredditItem } from '@/types/Subreddit';

export const SUBREDDIT_ITEMS = [
  new SubredditItem({
    id: SUBREDDIT_TYPE.REACT,
    value: 'reactjs',
    label: 'REACT',
    icon: <ReactIcon />,
    color: 'brand.react',
  }),
  new SubredditItem({ id: SUBREDDIT_TYPE.VUE, value: 'vuejs', label: 'VUE', icon: <VueIcon />, color: 'brand.vue' }),
  new SubredditItem({
    id: SUBREDDIT_TYPE.ANGULAR,
    value: 'angular',
    label: 'ANGULAR',
    icon: <AngularIcon />,
    color: 'brand.angular',
  }),
];
