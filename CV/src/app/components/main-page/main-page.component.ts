import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeSelectorComponent } from '../header/theme-selector/theme-selector.component';
import { LanguageSelectorComponent } from '../header/language-selector/language-selector.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../header/nav-bar/nav-bar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, ThemeSelectorComponent, LanguageSelectorComponent, RouterModule, NavBarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
