import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { skillsData } from 'src/app/shared/interfaces/resource.model';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';
import { skillResource } from 'src/app/shared/resources/skills';

@Component({
  selector: 'app-skill-menu',
  standalone: true,
  imports: [MatListModule, TranslatePipe],
  templateUrl: './skill-menu.component.html',
  styleUrl: './skill-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillMenuComponent {
  skillResource = skillResource;

  onSkillSelect = output<string>();

  onSkillClicked(skillData: skillsData) {
    if (skillData.description) {
      this.onSkillSelect.emit(skillData.description);
    }
  }
}
