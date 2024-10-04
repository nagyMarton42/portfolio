import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillListComponent } from './skill-list/skill-list.component';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SkillListComponent, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {}
