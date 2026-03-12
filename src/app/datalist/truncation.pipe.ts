import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncation',
  standalone: false,
})
export class TruncationPipe implements PipeTransform {
  transform(value: string | null): string | null {
    if (value && value.length > 30) {
      return value.slice(0, 100) + '...';
    }
    return value;
  }
}
