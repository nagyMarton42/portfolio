import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SelectForTextComponent } from 'src/app/shared/components/select-for-text/select-for-text.component';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';
import { experienceResource } from 'src/app/shared/resources/experiences';
import { skillResource } from 'src/app/shared/resources/skills';

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [SelectForTextComponent, TranslatePipe],
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnicalSkillsComponent {
  skillResource = skillResource;
}
