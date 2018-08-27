import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MutantesService {

  mutantes:any[]=[];

  constructor(public http:Http) { 
    console.log("servicio de mutantes listo para usar");
    this.cargar_mutantes();
  }

  cargar_mutantes(){
    this.http.get("assets/data/mutantes.json").subscribe(
      respuesta => {
        let data = respuesta.json();
        this.mutantes=data.mutantes;
      }
    )
  }
}
