import { makeAboutSimonView } from "./about-simon.view.js";
import { makeAboutSiteView } from "./about-this-site.view.js";
import { makeHomeView } from "./home.view.js";
import { makeTechUsedView } from "./technology-used.view.js";
import { renderView } from "./views.utils.js";

type NavItem = [label: string, viewFn: Function];

const NAV_ITEMS: NavItem[] = [
  ["Home", makeHomeView],
  ["About this site", makeAboutSiteView],
  ["About Simon", makeAboutSimonView],
  ["Technology used", makeTechUsedView],
];

export function makeNavView() {
  const wrapper = document.createElement("div");

  NAV_ITEMS.forEach((navItem) => {
    const navLink = makeNavLink(navItem);
    wrapper.appendChild(navLink);
  });

  return wrapper;
}

function makeNavLink(navItem: NavItem) {
  const [label, viewFn] = navItem;

  const link = document.createElement("a");

  link.textContent = label;
  link.addEventListener("click", handleNavClick(viewFn));
  link.setAttribute("style", "padding: 2px; text-decoration: underline;");

  return link;
}

function handleNavClick(viewFn: Function) {
  return function (event: MouseEvent) {
    event.preventDefault();
    renderView(viewFn);
  };
}
