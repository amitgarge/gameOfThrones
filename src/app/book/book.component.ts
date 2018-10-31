//book component

import { Component, OnInit } from '@angular/core';

//importing router related code

import { ActivatedRoute, Router } from '@angular/router';
import { GotdataService } from "../gotdata.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [Location]
})
export class BookComponent implements OnInit {

  public book;
  constructor(private activatedroute: ActivatedRoute, private router: Router, public gotservice: GotdataService
    , private location: Location) { }

  ngOnInit() {
    //getting the character ID from the router
    let url = this.activatedroute.snapshot.paramMap.get('ID');
    console.log(url);

    let bookId = url.replace(/^\D+/g, ''); // replace all leading non-digits with nothing
    console.log(bookId);

    this.gotservice.getBookInformation(bookId).subscribe(
      data => {
        console.log(data);
        this.book = data;
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