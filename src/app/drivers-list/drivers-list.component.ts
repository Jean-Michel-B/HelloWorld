import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {


  games:string[] = ["PES06", "MineCraft", "Shenmue", "Evil Dead"];

  constructor() { }

  ngOnInit(): void {
  }


}
