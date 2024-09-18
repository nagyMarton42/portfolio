import { Skill } from '../enums/common-enums';

export interface fragmentData {
  label: string;
  fragment: string;
}

export interface skillsData {
  skill: Skill;
  label: string;
  description?: string;
}
