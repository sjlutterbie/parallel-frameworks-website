import { initVanillaApp } from './init';
import { mountReadHome } from '../../activities/read-home';
import { mountNavigateSite } from '../../activities/navigate-site';
import template from './layout.html';

jest.mock('../../activities/read-home');
jest.mock('../../activities/navigate-site');

describe('initVanillaApp', () => {
  it('Should load the layout and initial content', () => {
    const mountPoint = document.createElement('div');
    mountPoint.innerHTML = template;
    initVanillaApp(mountPoint);
    expect(mountPoint.innerHTML).toEqual(template);
    expect(mountReadHome).toHaveBeenCalled();
    expect(mountNavigateSite).toHaveBeenCalled();
  });
});
