import aboutSimonTemplate from './about-simon.view.html';
import aboutThisSiteTemplate from './about-this-site.view.html';
import technologyUsedTemplate from './technology-used.view.html';
import homeTemplate from './home.view.html';

export type NavItem = [label: string, viewParams: string, id: string];

const MAIN_CONTENT_SECTION = 'section-content';

export const navConfig: NavItem[] = [
  ['Home', homeTemplate, MAIN_CONTENT_SECTION],
  ['About this site', aboutThisSiteTemplate, MAIN_CONTENT_SECTION],
  ['About Simon', aboutSimonTemplate, MAIN_CONTENT_SECTION],
  ['Technology used', technologyUsedTemplate, MAIN_CONTENT_SECTION],
];
