import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content-section-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './content-section-wrapper.component.html',
  styleUrl: './content-section-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentSectionWrapperComponent {

}
