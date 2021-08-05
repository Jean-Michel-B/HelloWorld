import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {


  colorOne:string = "blue";

  onOff:boolean= true;

  product:any = {
    label: "iphone 12",
    price: 1255899990,
    stock: 0
  }

  
  ngOnInit(): void {
  }
  constructor() { }


  onSwitch(){
    if(this.onOff)
      this.onOff = false;
    else 
      this.onOff= true;
    
   
  }


}
