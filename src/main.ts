import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localeTrAt from '@angular/common/locales/tr';
registerLocaleData(localeTrAt, 'tr');


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
