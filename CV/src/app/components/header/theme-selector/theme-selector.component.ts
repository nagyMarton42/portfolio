import { Component, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Theme, ThemeMapping } from './theme-selector.model';
import { PageLayoutService } from './page-layout.service';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [MatTooltipModule, MatIconModule, MatButtonModule],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss',
})
export class ThemeSelectorComponent {
  themeSwitchData = computed(() => {
    return this.pageLayoutService.currentTheme() === Theme.dark ? ThemeMapping[Theme.light] : ThemeMapping[Theme.dark];
  });

  constructor(private pageLayoutService: PageLayoutService) {}

  switchDarkMode() {
    this.pageLayoutService.changeTheme(this.pageLayoutService.currentTheme() === Theme.dark ? Theme.light : Theme.dark);
  }
}
