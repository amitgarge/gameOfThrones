//got-home component

import { Component, OnInit } from '@angular/core';
import { GotdataService } from "../gotdata.service";

@Component({
  selector: 'app-got-home',
  templateUrl: './got-home.component.html',
  styleUrls: ['./got-home.component.css']
})

export class GotHomeComponent implements OnInit {
  public allcharacters: any;
  public allbooks: any;
  public allhouses: any;

  public alldata: any[] = [];


  constructor(public gotservice: GotdataService) { }

  ngOnInit() {
	/* On initializing, all characters, books and houses will be requested through the service
	using observables */
  
    this.gotservice.getAllCharacters().subscribe(
      data => {
        console.log(data);
        this.allcharacters = data;
        console.log(data.name);
        
        this.alldata = this.alldata.concat(this.allcharacters);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );

    this.gotservice.getAllBooks().subscribe(
      data => {
        console.log(data);
        this.allbooks = data;
        this.alldata = this.alldata.concat(this.allbooks);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );

    this.gotservice.getAllHouses().subscribe(
      data => {
        console.log(data);
        this.allhouses = data;
        this.alldata = this.alldata.concat(data);        
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }

  ngDoCheck(){
    
	/* since observables are asynchronous; ngDoCheck() will check for any updates and accordingly updates 'alldata' and using the compare() it will display all the data in the alphabetical order */
	
    function compare(a, b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }
    this.alldata = this.alldata.sort(compare);
  }  
}