import { clickToCountActivity } from './click-to-count';

describe('clickToCountActivity', () => {
  it('Should render a button', () => {
    const clickToCount = clickToCountActivity();

    expect(clickToCount.nodeName).toEqual('BUTTON');
  });

  it('Should display a properly incrementing count', () => {
    const clickToCount = clickToCountActivity();
    expect(clickToCount.textContent).toContain('0');
    clickToCount.click();
    expect(clickToCount.textContent).toContain('1');
    clickToCount.click();
    expect(clickToCount.textContent).toContain('2');
    clickToCount.click();
    clickToCount.click();
    expect(clickToCount.textContent).toContain('4');
  });
});
