import { Injectable, signal } from '@angular/core';
import { Language } from '../enums/language.enum';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private translations: any = {};
  private currentLang = signal<Language>(this.getInitialLanguage());

  constructor(private http: HttpClient) {}

  private getInitialLanguage(): Language {
    const storedLang = localStorage.getItem('appLanguage');
    return storedLang ? (storedLang as Language) : Language.en;
  }

  loadTranslations(language: Language): Observable<any> {
    localStorage.setItem('appLanguage', language);
    this.currentLang.set(language);
    return this.http.get(`/assets/languages/${this.currentLang()}.json`).pipe(
      tap((translations: any) => {
        this.translations = translations;
      }),
    );
  }

  getTranslation(key: string): string {
    return this.translations[key] || key;
  }

  getCurrentLang(): string {
    return this.currentLang();
  }
}
