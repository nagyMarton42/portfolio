import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { NavigationButtonData } from './nav-bar.model';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NavigationButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  buttonList: NavigationButtonData[] = [
    { label: 'about', fragment: 'aboutMe' },
    { label: 'Technical skills', fragment: 'technicalSkills' },
    { label: 'Professional experience', fragment: 'experience' },
  ];
}
