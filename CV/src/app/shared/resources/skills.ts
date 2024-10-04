import { Skill } from '../enums/common-enums';
import { skillData } from '../interfaces/resource.model';

export const skillResource: skillData[] = [
  { type: Skill.Angular, label: 'angularLabel', description: 'angularDescription', expertise: 90 },
  { type: Skill.Material, label: 'materialLabel', description: 'materialDescription', expertise: 100 },
  { type: Skill.React, label: 'reactLabel', description: 'reactDescription', expertise: 40 },
  { type: Skill.Typescript, label: 'tsLabel', description: 'tsDescription', expertise: 80 },
  { type: Skill.CSS, label: 'cssLabel', description: 'cssDescription', expertise: 90 },
  { type: Skill.OctopusAzure, label: 'deployLabel', description: 'deployDescription', expertise: 50 },
  { type: Skill.Dotnet, label: 'dotnetLabel', description: 'dotnetDescription', expertise: 30 },
  { type: Skill.TSQL, label: 'tsqlLabel', description: 'tsqlDescription', expertise: 30 },
];
