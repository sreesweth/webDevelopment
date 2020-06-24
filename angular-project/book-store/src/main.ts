import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule} from './app/app.module';
import { environment } from './environments/environment';
// import { Sample1Component } from './app/Newcomponent/sample1/sample1.component';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  // platformBrowserDynamic().bootstrapModule(Sample1Component)
  // .catch(err => console.error(err));
  