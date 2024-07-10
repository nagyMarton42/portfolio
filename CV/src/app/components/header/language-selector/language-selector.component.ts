import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'src/app/shared/services/translate.service';
import { Language } from './language-selector.model';
import { MatSelectModule } from '@angular/material/select';
import { EnumToArrayPipe } from 'src/app/shared/pipes/enum-to-array.pipe';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [MatSelectModule, EnumToArrayPipe],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'language-selector',
  },
})
export class LanguageSelectorComponent {
  readonly Languages = Language;
  readonly currentLanguage = this.translateService.currentLang;

  constructor(private translateService: TranslateService) {}

  changeLanguage(language: Language) {
    this.translateService.loadTranslations(language).subscribe();
  }
}
