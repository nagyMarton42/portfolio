import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SelectForTextComponent } from 'src/app/shared/components/select-for-text/select-for-text.component';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';
import { experienceResource } from 'src/app/shared/resources/experiences';

@Component({
  selector: 'app-professional-experience',
  standalone: true,
  imports: [SelectForTextComponent, TranslatePipe],
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalExperienceComponent {
  experienceResource = experienceResource;
}
