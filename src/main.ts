import './style.scss';
import Router from './router';

const app = document.querySelector<HTMLDivElement>('#app')!;
const router = new Router(app);

router.navigate(window.location.pathname);

window.addEventListener('popstate', () => {
  router.navigate(window.location.pathname);
});
