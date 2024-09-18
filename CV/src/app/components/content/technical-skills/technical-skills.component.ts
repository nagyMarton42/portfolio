import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SkillMenuComponent } from './skill-menu/skill-menu.component';
import { Skill } from 'src/app/shared/enums/common-enums';
import { skillResource } from 'src/app/shared/resources/skills';

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [SkillMenuComponent],
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnicalSkillsComponent {
  selectedSkillDescription = signal<string>(skillResource.find((resource) => resource.skill === Skill.Angular)?.description ?? '');

  onSkillSelect(skillDescription: string) {
    this.selectedSkillDescription.set(skillDescription);
  }
}
