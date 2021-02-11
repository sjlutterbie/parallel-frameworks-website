import { MountActivityFn } from '../activities.types';
import template from './template.html';

export const mountReadHome: MountActivityFn = function (
  mountPoint: HTMLElement
) {
  mountPoint.innerHTML = template;

  return mountPoint;
};
