import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score',
  standalone: true,
  pure:true,
})
export class ScorePipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) {
      return 'N/A';
    }
    return value.toFixed(2);
  }
}
