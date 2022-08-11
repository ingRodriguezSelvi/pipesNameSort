import { Component, Pipe, PipeTransform } from '@angular/core';


export interface IPerson{
  firtsName : string,
  lastName  : string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  person: IPerson = {
    lastName: 'Rodriguez',
    firtsName:  'Andres'
  }
}
