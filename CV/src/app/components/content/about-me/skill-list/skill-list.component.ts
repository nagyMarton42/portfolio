import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';
import { skillResource } from 'src/app/shared/resources/skills';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatProgressBarModule, TranslatePipe],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillListComponent {
  skillResource = skillResource;

  constructor(private router: Router) {}
  navigateToTechnicalSkills() {
    this.router.navigate([], { fragment: 'technicalSkills' });
  }
}
