import * as faker from 'faker';
import {
  makeLink,
  makeList,
  makeParagraph,
  makeSpan,
  renderView,
} from './views.utils';

describe('makeLink', () => {
  it('Should return an HTML anchor object', () => {
    const testLink = makeLink('testHref', 'testLabel');
    expect(testLink.tagName).toEqual('A');
  });

  it('Should build the standard case correctly', () => {
    const mockHref = faker.internet.url();
    const mockLabel = faker.lorem.words(3);
    const testLink = makeLink(mockHref, mockLabel);

    expect(testLink.getAttribute('href')).toEqual(mockHref);
    expect(testLink.textContent).toEqual(mockLabel);
    expect(testLink.getAttribute('target')).toBeNull();
  });

  it('Should pre a link to open in a new tab, if set', () => {
    const testLink = makeLink('testHref', 'testLabel', true);

    expect(testLink.getAttribute('target')).toEqual('_blank');
  });
});

describe('makeList', () => {
  it('Should create the correct type of list object', () => {
    const testCases: [string[], boolean, string][] = [
      // listItems, ordered, expectedOutput
      [[], true, 'OL'],
      [[], false, 'UL'],
    ];

    testCases.forEach((testCase) => {
      expect(makeList(testCase[0], testCase[1]).tagName).toEqual(testCase[2]);
    });
  });

  it('Should create the correct set of list items', () => {
    const itemCount = faker.random.number(10);

    const listItems = Array(itemCount);
    for (let i = 0; i < listItems.length; i++) {
      listItems[i] = faker.lorem.words(3);
    }

    const testList = makeList(listItems);
    const outputItems = testList.getElementsByTagName('li');

    expect(outputItems.length).toEqual(itemCount);
    listItems.forEach((item, index) => {
      expect(outputItems.item(index)?.textContent).toEqual(item);
    });
  });
});

describe('makeParagraph', () => {
  it('Should return an HTML paragraph object', () => {
    expect(makeParagraph('foo').tagName).toEqual('P');
  });

  it('Should render an empty paragraph, if not text provided', () => {
    expect(makeParagraph().textContent).toEqual('');
  });

  it('Should render the correct paragraph text', () => {
    const text = faker.lorem.sentences(3);
    expect(makeParagraph(text).textContent).toEqual(text);
  });
});

describe('makeSpan', () => {
  it('Should return an HTML Span element', () => {
    expect(makeSpan('foo').tagName).toEqual('SPAN');
  });

  it('Should render the correct span text', () => {
    const text = faker.lorem.words(3);
    expect(makeSpan(text).textContent).toEqual(text);
  });
});

describe('renderView', () => {
  it('Should reset only the wrapper to include the view content', () => {
    const targetId = faker.lorem.word();
    const decoyId = `${targetId}X`;
    const originalContent = faker.lorem.paragraph();

    document.body.innerHTML = `
      <div id="${targetId}"><p>${originalContent}</p></div>
      <div id="${decoyId}"><p>${originalContent}</p></div>`;

    const newContent = faker.lorem.paragraph();
    function viewFn() {
      const view = document.createElement('p');
      view.textContent = newContent;
      return view;
    }

    renderView(viewFn, targetId);

    const targetSection = document.getElementById(targetId);
    const decoySection = document.getElementById(decoyId);
    expect(targetSection?.textContent).toEqual(newContent);
    expect(decoySection?.textContent).toEqual(originalContent);
  });
});
