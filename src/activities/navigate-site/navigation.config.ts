import { mountReadHome } from '../read-home';
import { mountReadAboutSite } from '../read-about-site';
import { mountReadAboutSimon } from '../read-about-simon';
import { mountReadTechnologyUsed } from '../read-technology-used';

import { MountActivityFn } from '../activities.types';

export type NavItem = {
  label: string;
  mountFn: MountActivityFn;
};

export const navConfig = [
  {
    label: 'Home',
    mountFn: mountReadHome,
  },
  {
    label: 'About this site',
    mountFn: mountReadAboutSite,
  },
  {
    label: 'About Simon',
    mountFn: mountReadAboutSimon,
  },
  {
    label: 'Technology used',
    mountFn: mountReadTechnologyUsed,
  },
];
