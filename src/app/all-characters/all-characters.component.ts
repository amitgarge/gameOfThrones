//all-characters component

import { Component, OnInit } from '@angular/core';
import { GotdataService } from "../gotdata.service";

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {
  
  public allCharacters;
  
  constructor(public gotdataservice: GotdataService) { }

  ngOnInit() {
    console.log("Character Component OnInit Called");
    this.allCharacters = this.gotdataservice.getAllCharacters().subscribe(//converting observable into data
      data => {
        console.log("logging data");
        this.allCharacters = data;
        console.log(this.allCharacters);
        this.allCharacters = this.gotdataservice.getSortData(this.allCharacters);//sorting 
        console.log(this.allCharacters);
      },
      error => {
        console.log("some error occurred");
        this.gotdataservice.handleError(error);
      }
    )
    console.log(this.allCharacters);
  }
}
