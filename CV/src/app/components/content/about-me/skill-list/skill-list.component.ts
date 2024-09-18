import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatProgressBarModule],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillListComponent {
  skills = [
    { name: 'Angular', expertise: 90 },
    { name: 'React', expertise: 75 },
    { name: 'JavaScript', expertise: 85 },
    { name: 'Node.js', expertise: 80 },
    { name: 'TypeScript', expertise: 80 },
    { name: 'HTML/CSS', expertise: 95 },
    { name: 'Git', expertise: 70 },
  ];

  constructor(private router: Router) {}
  navigateToTechnicalSkills() {
    this.router.navigate([], { fragment: 'technicalSkills' });
  }
}
