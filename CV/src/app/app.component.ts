import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ScrollingService } from './shared/services/scrolling.service';
import { ScrollDirection } from './shared/enums/config-enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MainPageComponent],
  providers: [ScrollingService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'handleKeyDown($event)',
  },
})
export class AppComponent {
  constructor(private scrollService: ScrollingService) {}

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.scrollService.scrollToNeighbor(ScrollDirection.Next);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.scrollService.scrollToNeighbor(ScrollDirection.Prev);
    }
  }
}
