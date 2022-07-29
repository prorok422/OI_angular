import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], search: string, field: string,): any[] {

    if (!search.trim()) {
      return value;
    }
    return value.filter((v) =>
      v[field].toLowerCase().startsWith(search.toLowerCase())
    );


  }

}
