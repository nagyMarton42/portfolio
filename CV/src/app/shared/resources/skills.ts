import { Skill } from '../enums/common-enums';
import { skillsData } from '../interfaces/resource.model';

export const skillResource: skillsData[] = [
  { skill: Skill.Angular, label: 'angularLabel', description: 'angular leírás' },
  { skill: Skill.CSS, label: 'cssLabel', description: 'CSS leírás' },
  { skill: Skill.Dotnet, label: 'dotnetLabel', description: '.NET leírás' },
  { skill: Skill.Octopus, label: 'octopusLabel', description: 'octopus leírás' },
  { skill: Skill.TSQL, label: 'tsqlLabel', description: 'tsql leírás' },
  { skill: Skill.Typescript, label: 'tsLabel' },
];
