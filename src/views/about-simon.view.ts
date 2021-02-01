import { makeParagraph } from "./views.utils";

const PARAGRAPH_1 = `
  Simon is a Frontend Developer who values clean, clear code, test-driven
  development (TDD), and browser applications that deliver robust
  functionality with an intuitive user experience (UX).`;

const PARAGRPAH_2 = `
  While not coding, you're most likely to find Simon... well, sleeping -
  which is how he tries to spend a third of his life. But if you catch him
  awake, you'll likely find him cooking, running, wine tasting, strength
  training, reflecting, or spending quality times with friends. And if you
  and he are both very lucky, he'll be involved in more than one of the
  above at once.`;

const PARAGRAPH_3 = `... Some combinations work better than others.`;

export function makeAboutSimonView() {
  const view = document.createElement("div");

  [PARAGRAPH_1, PARAGRPAH_2, PARAGRAPH_3].forEach((paraText) => {
    const paragraph = makeParagraph(paraText);
    view.appendChild(paragraph);
  });

  return view;
}
