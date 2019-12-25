import {BezaApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {BezaApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new BezaApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
