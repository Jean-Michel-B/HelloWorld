import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {


  games:string[] = ["Halo Infinite", "Gow 5", "Forza 12", "States Of Decay 2", "Ori"];

  constructor() { }

  ngOnInit(): void {
  }


}
