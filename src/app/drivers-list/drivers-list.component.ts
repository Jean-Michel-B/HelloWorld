import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(truc: string){
 
    console.log(truc);
   
  }


  onSurvol(){
    console.log("Survol de la zone...DCA")
  }
}
