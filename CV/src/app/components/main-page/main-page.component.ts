import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeSelectorComponent } from '../header/theme-selector/theme-selector.component';
import { LanguageSelectorComponent } from '../header/language-selector/language-selector.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, ThemeSelectorComponent, LanguageSelectorComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
