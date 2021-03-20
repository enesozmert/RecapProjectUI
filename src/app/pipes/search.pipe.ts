import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform<T>(value:Array<T>, key:string):any {
    if(!value)return null;
    if(!key)return value;

    key = key.toLowerCase();

    return value.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(key);
    });
  }

}
