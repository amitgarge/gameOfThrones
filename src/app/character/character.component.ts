import { Component, OnInit } from '@angular/core';

//importing router related code

import { ActivatedRoute, Router } from '@angular/router';
import { GotdataService } from "../gotdata.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers:[Location]
})
export class CharacterComponent implements OnInit {

  public character;

  constructor(private activatedroute:ActivatedRoute,private router:Router,public gotservice:GotdataService
    , private location: Location) { }

  ngOnInit() {
    //getting the character ID from the router
    let url = this.activatedroute.snapshot.paramMap.get('ID');
    console.log(url);

    let characterId = url.replace(/^\D+/g, ''); // replace all leading non-digits with nothing
    console.log(characterId);

    this.gotservice.getCharacterInformation(characterId).subscribe(
      data=>{
        console.log(data);
        this.character=data;        
      },
      error=>{
        console.log("Some error occured");
        console.log(error.errorMessage);        
      }
    );        
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }
}