import { mountVanillaApp, VANILLA_APP_ID } from './mount';
import { initVanillaApp } from './init';

jest.mock('./init');
const mockedInit = initVanillaApp as jest.MockedFunction<typeof initVanillaApp>;

describe('mountVanillaApp', () => {
  beforeEach(() => {
    mockedInit.mockClear();
  });

  it('Should mount with its default values', () => {
    const mountPoint = mountVanillaApp();
    const expectedPoint = document.getElementById(VANILLA_APP_ID);

    expect(mountPoint).toBeDefined();
    expect(expectedPoint).toBeDefined();
    expect(mountPoint).toEqual(expectedPoint);
  });

  it('Should support a custom appId & container', () => {
    const testId = 'foo';
    const testContainer = document.createElement('div');
    testContainer.setAttribute('id', 'bar');

    const mountPoint = mountVanillaApp(testContainer, testId);
    const expectedPoint = testContainer.firstChild;

    expect(mountPoint).toBeDefined();
    expect(expectedPoint).toBeDefined();
    expect(mountPoint).toEqual(expectedPoint);
  });

  it('Should run its init function', () => {
    mountVanillaApp();
    expect(initVanillaApp).toHaveBeenCalledTimes(1);
  });
});
