import { Component, computed } from '@angular/core';
import { TranslateService } from './shared/services/translate.service';
import { Language } from './shared/enums/language.enum';
import { TranslatePipe } from './shared/pipes/translate.pipe';
import { PageLayoutService } from './shared/services/page-layout.service';
import { Theme } from './shared/enums/theme.enum';
import { ThemeMapping } from './shared/interfaces/theme.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [TranslatePipe, MatTooltipModule, MatIconModule, MatButtonModule],
})
export class AppComponent {
  readonly Language = Language;
  themeSwitchData = computed(() => {
    return this.pageLayoutService.currentTheme() === Theme.dark ? ThemeMapping[Theme.light] : ThemeMapping[Theme.dark];
  });

  constructor(private translateService: TranslateService, private pageLayoutService: PageLayoutService) {}

  changeLanguage(language: Language) {
    this.translateService.loadTranslations(language).subscribe();
  }

  switchDarkMode() {
    this.pageLayoutService.changeTheme(this.pageLayoutService.currentTheme() === Theme.dark ? Theme.light : Theme.dark);
  }
}
