import { Home } from './components/Home';

export default class Router {
  private routes: { [key: string]: () => Promise<string> };

  constructor(private app: HTMLDivElement) {
    this.routes = {
      '/': Home
    };
  }

  async navigate(path: string) {
    const component = this.routes[path];
    if (component) {
      const html = await component();
      this.app.innerHTML = html;
    } else {
      this.app.innerHTML = '<p>404 Not Found</p>';
    }
  }
}
