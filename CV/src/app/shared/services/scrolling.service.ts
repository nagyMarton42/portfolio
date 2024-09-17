import { Inject, Injectable, InjectionToken, Optional, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrollingConfig } from '../interfaces/configs.model';
import { ScrollDirection, ScrollFunction } from '../enums/config-enums';
import { Fragments } from '../resources/fragments';

export const SCROLLING_CONFIG = new InjectionToken<ScrollingConfig>('scrollingConfig');

@Injectable({
  providedIn: 'root',
})
export class ScrollingService {
  scrollFunctionMapping: Record<ScrollFunction, (t: number) => number> = {
    [ScrollFunction.EaseIn]: (t: number) => t * t,
    [ScrollFunction.EaseInOut]: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
    [ScrollFunction.easeOut]: (t: number) => --t * t * t + 1,
  };

  currentFragment = signal<string>('');

  constructor(private router: Router, private activtedRoute: ActivatedRoute, @Optional() @Inject(SCROLLING_CONFIG) private config: ScrollingConfig) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const fragment = this.router.url.split('#')[1];
      this.currentFragment.set(fragment);
      if (fragment) {
        this.smoothScrollToElement(fragment);
      }
    });
  }

  public scrollToNeighbor(direction: ScrollDirection) {
    const fragmentIndex = Fragments.findIndex((fragmentData) => fragmentData.fragment === this.currentFragment());
    let newFragmentIndex: number;
    if (fragmentIndex > -1 && direction === ScrollDirection.Next && Fragments.length - 1 > fragmentIndex) {
      newFragmentIndex = fragmentIndex + 1;
    } else if (fragmentIndex && fragmentIndex > 0) {
      newFragmentIndex = fragmentIndex - 1;
    }
    if (newFragmentIndex! !== null) {
      this.router.navigate([], { fragment: Fragments[newFragmentIndex!].fragment });
    }
  }

  private smoothScrollToElement(elementId: string) {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = this.config?.scrollTime ?? 1000; // duration of the scroll in ms
    const startTime = performance.now();
    const scrollFunction = this.scrollFunctionMapping[this.config?.scrollFunction ?? ScrollFunction.EaseInOut];

    const step = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // progress between 0 and 1
      const ease = scrollFunction(progress);
      const currentScrollPosition = startPosition + distance * ease;

      window.scrollTo(0, currentScrollPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
