import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringOnlyPipe'
})
export class StringOnlyPipePipe implements PipeTransform {

  transform(value: string): string {
    return value;
  }

}