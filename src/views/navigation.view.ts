import { makeAboutSimonView } from './about-simon.view';
import { makeAboutSiteView } from './about-this-site.view';
import { makeHomeView } from './home.view';
import { makeTechUsedView } from './technology-used.view';
import { ViewFn } from './views.types';
import { renderView } from './views.utils';

type NavItem = [label: string, viewFn: ViewFn];

const NAV_ITEMS: NavItem[] = [
  ['Home', makeHomeView],
  ['About this site', makeAboutSiteView],
  ['About Simon', makeAboutSimonView],
  ['Technology used', makeTechUsedView],
];

export function makeNavView(): HTMLDivElement {
  const wrapper = document.createElement('div');

  NAV_ITEMS.forEach((navItem) => {
    const navLink = makeNavLink(navItem);
    wrapper.appendChild(navLink);
  });

  return wrapper;
}

function makeNavLink(navItem: NavItem): HTMLAnchorElement {
  const [label, viewFn] = navItem;

  const link = document.createElement('a');

  link.textContent = label;
  link.addEventListener('click', handleNavClick(viewFn));
  link.setAttribute('style', 'padding: 2px; text-decoration: underline;');

  return link;
}

function handleNavClick(viewFn: ViewFn): (event: MouseEvent) => void {
  return function (event: MouseEvent) {
    event.preventDefault();
    renderView(viewFn);
  };
}
