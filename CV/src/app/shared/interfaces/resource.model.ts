import { Skill, WorkExperience } from '../enums/common-enums';

export interface fragmentData {
  label: string;
  fragment: string;
}

export interface selectForTextData {
  type: any;
  label: string;
  description?: string;
}

export interface skillData extends selectForTextData {
  type: Skill;
  expertise?: number;
}

export interface experienceData extends selectForTextData {
  type: WorkExperience;
}
