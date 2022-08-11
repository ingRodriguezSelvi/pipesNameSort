import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    console.log(value);
    console.log(args);
    return 'Hello'
  }

}
