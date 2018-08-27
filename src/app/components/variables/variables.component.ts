import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent  {

  nombre : string = "Logan";
  nota:number = 10;
  constructor() { }

  cambiar_nombre(){
    this.nombre="wolverine";
  }

}
