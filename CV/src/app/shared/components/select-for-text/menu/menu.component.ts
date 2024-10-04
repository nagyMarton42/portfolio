import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnChanges, output, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { selectForTextData } from 'src/app/shared/interfaces/resource.model';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';

@Component({
  selector: 'app-select-for-text-menu',
  standalone: true,
  imports: [MatListModule, TranslatePipe, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillMenuComponent implements OnChanges {
  resource = input.required<selectForTextData[]>();
  onSelect = output<string>();
  selectedType = signal<any>(null);

  ngOnChanges(): void {
    if (this.resource() && this.resource().length > 0) {
      this.selectedType.set(this.resource()[0].type!);
    }
  }

  onClicked(skillData: selectForTextData) {
    if (skillData.description) {
      this.selectedType.set(skillData.type);
      this.onSelect.emit(skillData.description);
    }
  }
}
