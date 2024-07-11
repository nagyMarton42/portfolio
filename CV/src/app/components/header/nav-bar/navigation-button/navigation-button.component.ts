import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [MatButtonModule, TranslatePipe, RouterModule],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationButtonComponent {
  label = input.required<string>();
  fragment = input.required<string>();
}
