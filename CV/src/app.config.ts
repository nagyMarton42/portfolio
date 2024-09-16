import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { TranslateService } from './app/shared/services/translate.service';
import { initializeApp } from './initialize-factory';
import { SCROLLING_CONFIG } from './app/shared/services/scrolling.service';
import { ScrollingConfig } from './app/shared/interfaces/configs.model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    {
      provide: SCROLLING_CONFIG,
      useValue: {
        scrollTime: 1000,
      } as ScrollingConfig,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [TranslateService],
      multi: true,
    },
  ],
};
