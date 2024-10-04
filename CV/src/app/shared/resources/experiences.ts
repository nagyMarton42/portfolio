import { WorkExperience } from '../enums/common-enums';
import { experienceData } from '../interfaces/resource.model';

export const experienceResource: experienceData[] = [
  { type: WorkExperience.ELTE, label: 'elteLabel', description: 'ELTE leírás' },
  { type: WorkExperience.Ceva, label: 'cevaLabel', description: 'ceva leírás' },
  { type: WorkExperience.Obudai, label: 'obudaiLabel', description: 'obudai leírás' },
  { type: WorkExperience.MISoftEnvirotis, label: 'envirotisLabel', description: 'envirotis leírás' },
  { type: WorkExperience.MISoftTESZEK, label: 'teszekLabel', description: 'teszek leírás' },
  { type: WorkExperience.KretaLibrary, label: 'libraryLabel', description: 'library leírás' },
  { type: WorkExperience.KretaKKGM, label: 'kkgmLabel', description: 'kkgm leírás' },
];
