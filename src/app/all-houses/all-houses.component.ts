//all-houses component

import { Component, OnInit } from '@angular/core';
import { GotdataService } from "../gotdata.service";

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent implements OnInit {
  public allHouses;
  constructor(public gotDataService:GotdataService) { }

  ngOnInit() {
    console.log("House Component OnInit Called");
    this.allHouses = this.gotDataService.getAllHouses().subscribe(//converting observable into data
      data => {
        console.log("logging data");
        this.allHouses = data;
        console.log(this.allHouses);
        this.allHouses = this.gotDataService.getSortData(this.allHouses);//sorting 
        console.log(this.allHouses);
      },
      error => {
        console.log("some error occurred");
        this.gotDataService.handleError(error);
      }
    )
    console.log(this.allHouses);
  }

}
