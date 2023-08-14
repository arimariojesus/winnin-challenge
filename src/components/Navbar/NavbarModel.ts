import { ListingsType } from '@/types/Subreddit';

export class NavItem {
  constructor(props: NavItem) {
    this.label = props.label;
    this.value = props.value;
  }

  public label: string;
  public value: ListingsType;
}
