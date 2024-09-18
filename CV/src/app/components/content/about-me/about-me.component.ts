import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillListComponent } from './skill-list/skill-list.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SkillListComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {}
