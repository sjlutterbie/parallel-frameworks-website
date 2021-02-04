/**
 * These are quick & dirty convenience functions. They're overly restrictive
 * regarding the content they accept for their element type. They're OK for now,
 * but should be cleaned up before being used more widely.
 */

import { ViewFn } from './views.types';

export function makeLink(
  href: string,
  label: string,
  newTab = false
): HTMLAnchorElement {
  const link = document.createElement('a');

  link.setAttribute('href', href);
  link.textContent = label;
  if (newTab) {
    link.setAttribute('target', '_blank');
  }

  return link;
}

export function makeList(
  listItems: string[],
  ordered = false
): HTMLOListElement | HTMLUListElement {
  const listType = ordered ? 'ol' : 'ul';
  const list = document.createElement(listType);

  listItems.forEach((itemText) => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
  });

  return list;
}

export function makeParagraph(text = ''): HTMLParagraphElement {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;

  return paragraph;
}

export function makeSpan(text: string): HTMLSpanElement {
  const span = document.createElement('span');

  span.textContent = text;

  return span;
}

export function renderView(
  viewFn: ViewFn,
  wrapperId = 'section-content'
): void {
  const wrapper = document.getElementById(wrapperId);
  if (wrapper) {
    wrapper.innerHTML = '';
    const view = viewFn();
    wrapper?.appendChild(view);
  }
}
