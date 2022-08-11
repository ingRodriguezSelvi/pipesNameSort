import { Pipe, PipeTransform } from "@angular/core";
import { IPerson } from "./app.component";

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: IPerson):IPerson {
    const personPipe = {...value};
    personPipe.firtsName = value.firtsName.split("").reverse().join("");
    personPipe.lastName = value.lastName.split("").reverse().join("");
    return personPipe;
  }

}
