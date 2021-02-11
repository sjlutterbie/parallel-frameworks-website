import { MountActivityFn } from '../activities.types';
import { navConfig, NavItem } from './navigation.config';

export function makeNavComponent(
  targetMountPoint: HTMLElement
): HTMLDivElement {
  const navComponent = document.createElement('div');

  navConfig.forEach((navItem) => {
    const navLink = makeNavLink(navItem, targetMountPoint);
    navComponent.appendChild(navLink);
  });

  return navComponent;
}

function makeNavLink(
  navItem: NavItem,
  targetMountPoint: HTMLElement
): HTMLAnchorElement {
  const { label, mountFn } = navItem;
  const navLink = document.createElement('a');

  navLink.textContent = label;
  navLink.addEventListener('click', handleNavClick(mountFn, targetMountPoint));
  // TODO Move to style when implementing Sass
  navLink.setAttribute('style', 'padding: 2px; text-decoration: underline;');

  return navLink;
}

function handleNavClick(
  mountFn: MountActivityFn,
  targetMountPoint: HTMLElement
) {
  return function (event: MouseEvent) {
    event.preventDefault();
    mountFn(targetMountPoint);
  };
}
