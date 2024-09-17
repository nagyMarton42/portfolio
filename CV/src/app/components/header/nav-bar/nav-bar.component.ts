import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { Fragments } from 'src/app/shared/resources/fragments';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NavigationButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  buttonList = Fragments;
}
