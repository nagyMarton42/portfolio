import { effect, Injectable, signal } from '@angular/core';
import { Theme } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class PageLayoutService {
  private _currentTheme = signal<Theme>(this.getInitialTheme());
  currentTheme = this._currentTheme.asReadonly();

  constructor() {
    effect(() => {
      if (this._currentTheme() === Theme.dark) {
        (<HTMLCollectionOf<HTMLElement>>document.getElementsByTagName('html'))[0].classList.add('dark-theme');
      } else {
        (<HTMLCollectionOf<HTMLElement>>document.getElementsByTagName('html'))[0].classList.remove('dark-theme');
      }
    });
  }

  private getInitialTheme(): Theme {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? (storedTheme as Theme) : Theme.dark;
  }

  changeTheme(theme: Theme) {
    localStorage.setItem('theme', theme.toString());
    this._currentTheme.set(theme);
  }
}
