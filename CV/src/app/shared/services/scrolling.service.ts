import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrollingConfig } from '../interfaces/configs.model';

export const SCROLLING_CONFIG = new InjectionToken<ScrollingConfig>('scrollingConfig');

export 

@Injectable({
  providedIn: 'root',
})
export class ScrollingService {
  constructor(private router: Router, @Optional() @Inject(SCROLLING_CONFIG) private config: ScrollingConfig) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const fragment = this.router.url.split('#')[1];
      if (fragment) {
        this.smoothScrollToElement(fragment);
      }
    });
  }

  smoothScrollToElement(elementId: string) {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = this.config?.scrollTime ?? 1000; // duration of the scroll in ms
    const startTime = performance.now();
    const scrollFunction = this.config?.scrollFunction ?? 
    const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t);

    const step = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // progress between 0 and 1
      const ease = easeInOutQuart(progress);
      const currentScrollPosition = startPosition + distance * ease;

      window.scrollTo(0, currentScrollPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(step); // continue scrolling
      }
    };

    requestAnimationFrame(step); // start animation
  }
}
