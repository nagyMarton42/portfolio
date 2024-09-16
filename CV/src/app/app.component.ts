import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ScrollingService } from './shared/services/scrolling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MainPageComponent],
  providers: [ScrollingService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private scrollService: ScrollingService) {}
}
