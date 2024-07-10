import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Language } from 'src/app/components/header/language-selector/language-selector.model';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private _translations = signal<any>({});
  private _currentLang = signal<Language>(this.getInitialLanguage());
  public currentLang = this._currentLang.asReadonly();

  constructor(private http: HttpClient) {}

  private getInitialLanguage(): Language {
    const storedLang = localStorage.getItem('appLanguage');
    return storedLang ? (storedLang as Language) : Language.en;
  }

  loadTranslations(language: Language): Observable<any> {
    localStorage.setItem('appLanguage', language);
    this._currentLang.set(language);
    return this.http.get(`/assets/languages/${this._currentLang()}.json`).pipe(
      tap((translations: any) => {
        this._translations.set(translations);
      }),
    );
  }

  getTranslation(key: string): string {
    return this._translations()[key] || key;
  }
}
