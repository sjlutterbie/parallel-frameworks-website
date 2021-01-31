import { makeList } from "./views.utils.js";

const TECH_USED_LIST = ["HTML", "Javascript", "Typescript"];

export function makeTechUsedView() {
  const view = document.createElement("div");

  const list = makeList(TECH_USED_LIST);
  view.appendChild(list);

  return view;
}
