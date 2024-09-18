import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-content-section-wrapper',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './content-section-wrapper.component.html',
  styleUrl: './content-section-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentSectionWrapperComponent {}
