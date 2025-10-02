import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localePt, 'pt');

bootstrapApplication(App, {
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
}).catch((err) => console.error(err));
