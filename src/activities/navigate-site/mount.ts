import { MountActivityFn } from '../activities.types';
import { makeNavComponent } from './build-nav';

export const mountNavigateSite: MountActivityFn = function (
  mountPoint: HTMLElement,
  targetMountPoint: HTMLElement
): HTMLElement {
  const navComponent = makeNavComponent(targetMountPoint);
  mountPoint.appendChild(navComponent);

  return mountPoint;
};
