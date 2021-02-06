import * as faker from 'faker';
import { renderHtmlTemplate } from './views.utils';

describe('renderHtmlTemplate', () => {
  it('Should reset only the wrapper to include the view content', () => {
    const targetId = faker.lorem.word();
    const decoyId = `${targetId}X`;
    const originalContent = faker.lorem.paragraph();

    document.body.innerHTML = `
      <div id="${targetId}"><p>${originalContent}</p></div>
      <div id="${decoyId}"><p>${originalContent}</p></div>`;

    const testTemplate = faker.lorem.paragraph();

    renderHtmlTemplate(testTemplate, targetId);

    const targetSection = document.getElementById(targetId);
    const decoySection = document.getElementById(decoyId);
    expect(targetSection?.textContent).toEqual(testTemplate);
    expect(decoySection?.textContent).toEqual(originalContent);
  });
});
