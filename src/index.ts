import { makeNavView } from './views/navigation.view';
import { renderHtmlTemplate } from './views/views.utils';
import homeTemplate from './views/home.view.html';

function init() {
  const navSection = document.getElementById('section-nav');
  const navView = makeNavView();
  navSection?.appendChild(navView);
  renderHtmlTemplate(homeTemplate, 'section-content');
}

init();
