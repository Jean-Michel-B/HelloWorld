import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {


  coverImage:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf6QztqepSgrVR_tiqX96bcNQz1E6AytTH99zqr6fvAGSP0X45yfcuh-1EIVv2lsAwEU&usqp=CAU"



  // 1er exemple d'interpolation
  // Type string int ou n'importe
  mardiMatin:any = "Ils ont l'air bien OFF"

  // 2eme exemple objet ou propriete
  game: any =  {

    title:"Among Us",
    support: "Android",
    multi: 10

  }

  userEmail="jeanmichel@symfonix.com"
  

  age:number = 13 

  constructor() { }

  ngOnInit(): void {
  }

  // Intepolation du retour d'une methode
  getStock(){
    return 2050;
  }

  isNotAvailable(){
    return true;
  }

  // Appel a une methode pour toutes sortes de traitements
  getWakeUp(){
    console.log("Silence de cathédrale Andalou")
  }

}
