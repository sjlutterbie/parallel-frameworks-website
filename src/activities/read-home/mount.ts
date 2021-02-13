import { MountActivityFn } from '../activities.types';
import { mountClickToCount } from '../click-to-count';

import template from './template.html';

export const mountReadHome: MountActivityFn = function (
  mountPoint: HTMLElement
) {
  mountPoint.innerHTML = template;

  mountClickToCount(mountPoint);

  return mountPoint;
};
