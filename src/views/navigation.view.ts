import { renderHtmlTemplate } from './views.utils';
import { NavItem, navConfig } from './navigation.config';

export function makeNavView(): HTMLDivElement {
  const wrapper = document.createElement('div');

  navConfig.forEach((navItem) => {
    const navLink = makeNavLink(navItem);
    wrapper.appendChild(navLink);
  });

  return wrapper;
}

function makeNavLink(navItem: NavItem): HTMLAnchorElement {
  const [label, template, id] = navItem;

  const link = document.createElement('a');

  link.textContent = label;
  link.addEventListener('click', handleNavClick(template, id));
  link.setAttribute('style', 'padding: 2px; text-decoration: underline;');

  return link;
}

function handleNavClick(
  template: string,
  id: string
): (event: MouseEvent) => void {
  return function (event: MouseEvent) {
    event.preventDefault();
    renderHtmlTemplate(template, id);
  };
}
