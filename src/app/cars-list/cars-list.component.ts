import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  // 1er exemple d'interpolation
  // Type string int ou n'importe
  mardiMatin:any = "Ils ont l'air bien OFF";

  // 2eme exemple objet ou propriete
  game: any =  {

    title:"Among Us",
    support: "Android",
    multi: 10

  };
  

  age:number = 13 ;

  constructor() { }

  ngOnInit(): void {
  }

  // Intepolation du retour d'une methode
  getStock(){
    return 2050;
  }

  // Appel a une methode pour toutes sortes de traitements
  getWakeUp(){
    console.log("Silence de cathédrale Andalou")
  }

}
