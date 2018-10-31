import { Component, OnInit } from '@angular/core';

//importing router related code

import { ActivatedRoute, Router } from '@angular/router';
import { GotdataService } from "../gotdata.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers: [Location]
})
export class HouseComponent implements OnInit {

  public house;

  constructor(private activatedroute: ActivatedRoute, private router: Router, public gotservice: GotdataService
    , private location: Location) { }

  ngOnInit() {
    //getting the character ID from the router
    let url = this.activatedroute.snapshot.paramMap.get('ID');
    console.log(url);

    let houseId = url.replace(/^\D+/g, ''); // replace all leading non-digits with nothing
    console.log(houseId);

    this.gotservice.getHouseInformation(houseId).subscribe(
      data => {
        console.log(data);
        this.house = data;
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    );        
  }
  public goBackToPreviousPage(): any {
    this.location.back();
  }
}
