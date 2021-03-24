import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isrentedbycarId'
})
export class IsrentedbycarIdPipe implements PipeTransform {

  transform(value: object, ...args: unknown[]): unknown {
    return null;
  }

}
