import { makeList } from './views.utils';

const TECH_USED_LIST = ['HTML', 'Javascript', 'Typescript'];

export function makeTechUsedView(): HTMLDivElement {
  const view = document.createElement('div');

  const list = makeList(TECH_USED_LIST);
  view.appendChild(list);

  return view;
}
