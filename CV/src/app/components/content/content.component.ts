import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContentSectionWrapperComponent } from './content-section-wrapper/content-section-wrapper.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatCardModule, AboutMeComponent, ContentSectionWrapperComponent, TechnicalSkillsComponent, ProfessionalExperienceComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {}
