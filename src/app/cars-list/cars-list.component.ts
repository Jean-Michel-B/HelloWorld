import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carUpdate:any;

  vehiculeOne:any = {
    name: "Mercedes 6.3 AMD",
    price: 33000
  }
  vehiculeTwo:any = {
    name: "Peugeot 80ti RTX",
    price: 3500
  }
  vehiculeThree:any = {
    name: "Citroën Ryzen",
    price: 2050
  }

  constructor() { }

  ngOnInit() {
    this.carUpdate = new Date();
  }

}
