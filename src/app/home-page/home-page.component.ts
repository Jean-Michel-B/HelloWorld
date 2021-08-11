import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title:string = "Drive-X";

  bestdDrivers:any;
  bestCars:Car[] | undefined;

  constructor(private data:DataService) { }

  ngOnInit(): void {

    this.bestdDrivers = this.data.getNbBestDrivers(3);
    this.bestCars = this.data.getNbPowerfullCars(2);
    
  }


}
