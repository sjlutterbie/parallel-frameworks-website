import { makeHomeView } from './views/home.view';
import { makeNavView } from './views/navigation.view';
import { renderView } from './views/views.utils';

function init() {
  const navSection = document.getElementById('section-nav');
  const navView = makeNavView();
  navSection?.appendChild(navView);

  renderView(makeHomeView);
}

init();
