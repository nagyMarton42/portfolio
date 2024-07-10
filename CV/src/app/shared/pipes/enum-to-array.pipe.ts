import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
  standalone: true,
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: any) {
    return Object.keys(data)
      .filter((key) => isNaN(Number(key))) // Filters out numeric keys added by TypeScript for reverse mappings
      .map((key) => data[key]);
  }
}
