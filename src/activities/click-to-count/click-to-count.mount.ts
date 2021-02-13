import { MountActivityFn } from '../activities.types';
import { clickToCountActivity } from './click-to-count';

export const mountClickToCount: MountActivityFn = function (mountPoint) {
  const clickToCount = clickToCountActivity();

  mountPoint.appendChild(clickToCount);

  return mountPoint;
};
