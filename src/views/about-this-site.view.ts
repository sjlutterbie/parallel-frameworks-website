import { makeLink, makeList, makeParagraph, makeSpan } from "./views.utils";

const PARAGRAPH_1 = `
  If you're wondering why this site is so basic, that's because it's only
  just beginning. It's an experiment. An adventure. A classroom and a
  playground all rolled into a single repository.`;

const PARAGRAPH_2_TEXT = `
  One day, this site will not only be fully functional, you will be able to
  render it using three different frameworks (or specific lack thereof), and
  three different design systems:`;

const PARAGRAPH_2_LIST = [
  "React + Material UI",
  "Angular + Clarity",
  "Vanilla JS + Carbon",
];

const paragraph3Segments = [
  makeSpan(`But first, it must grow from the very basics. It started with a
    single HTML template, and a single Javascript file. You can read more about
    that in`),
  makeLink("https://link.medium.com/uFHAN7yosdb", "this article on Medium"),
  makeSpan(`. It will evolve, step-by-step, and each step will be explored and
    documented. You can follow the journey on `),
  makeLink("https://simon-lutterbie.medium.com/", "Medium"),
  makeSpan("or"),
  makeLink(
    "https://github.com/sjlutterbie/parallel-frameworks-website",
    "Github"
  ),
];

export function makeAboutSiteView() {
  const view = document.createElement("div");

  [PARAGRAPH_1, PARAGRAPH_2_TEXT].forEach((paraText) => {
    const paragraph = makeParagraph(paraText);
    view.appendChild(paragraph);
  });

  const list = makeList(PARAGRAPH_2_LIST);
  view.appendChild(list);

  // Empty paragraph
  const paragraph3 = makeParagraph();
  paragraph3Segments.forEach((segment) => {
    paragraph3.appendChild(segment);
  });

  view.appendChild(paragraph3);

  return view;
}
