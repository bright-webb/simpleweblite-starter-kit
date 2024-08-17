import { Render } from "simpleweblite";

export async function Home(): Promise<string> {
    return Render('Home');
  }