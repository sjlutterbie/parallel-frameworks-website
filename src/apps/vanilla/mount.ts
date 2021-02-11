import { initVanillaApp } from './init';

import layout from './layout.html';

export const VANILLA_APP_ID = 'vanilla-app';

export function mountVanillaApp(
  container = document.body,
  appId: string = VANILLA_APP_ID,
  initFn = initVanillaApp
): HTMLElement {
  const mountPoint = document.createElement('div');
  mountPoint.setAttribute('id', appId);
  mountPoint.innerHTML = layout;
  container.appendChild(mountPoint);

  initFn(mountPoint);

  return mountPoint;
}
