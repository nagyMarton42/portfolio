import { firstValueFrom } from 'rxjs';
import { TranslateService } from './app/shared/services/translate.service';

export function initializeApp(translateService: TranslateService): () => Promise<void> {
  return () => firstValueFrom(translateService.initialize());
}
