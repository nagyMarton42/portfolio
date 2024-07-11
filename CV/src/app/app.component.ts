import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MainPageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
