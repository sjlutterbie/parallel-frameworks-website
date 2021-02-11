import { mountNavigateSite } from '../../activities/navigate-site';
import { mountReadHome } from '../../activities/read-home';

export function initVanillaApp(mountPoint: HTMLElement): HTMLElement {
  // Collect mount points
  const mainContentSection = mountPoint.querySelector(
    '#section-content'
  ) as HTMLElement;
  const navMountPoint = mountPoint.querySelector('#section-nav') as HTMLElement;

  // Render navigation
  mountNavigateSite(navMountPoint, mainContentSection);
  // Render initial content
  mountReadHome(mainContentSection);

  return mountPoint;
}
