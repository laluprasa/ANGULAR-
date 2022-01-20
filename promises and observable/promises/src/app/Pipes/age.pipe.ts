import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:any):any {
    let curYr=new Date().getFullYear();
    let userYr=new Date(value).getFullYear();
    let userAge=curYr-userYr;
    return userAge;
  }

}
