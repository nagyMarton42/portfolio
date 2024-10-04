import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { SkillMenuComponent } from 'src/app/shared/components/select-for-text/menu/menu.component';
import { selectForTextData } from '../../interfaces/resource.model';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-select-for-text',
  standalone: true,
  imports: [SkillMenuComponent, TranslatePipe],
  templateUrl: './select-for-text.component.html',
  styleUrl: './select-for-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectForTextComponent {
  label = input.required<string>();
  resource = input.required<selectForTextData[]>();

  selectedDescription = signal<string>('');

  onSelect(skillDescription: string) {
    this.selectedDescription.set(skillDescription);
  }
}
