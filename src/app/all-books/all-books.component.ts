//all-books component

import { Component, OnInit } from '@angular/core';
import { GotdataService } from "../gotdata.service";

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})

export class AllBooksComponent implements OnInit {
  public allBooks;	//declaring class member
  
  //declaring http service instance in the constructor
  constructor(public gotDataService:GotdataService) { }

  ngOnInit() {
    this.allBooks = this.gotDataService.getAllBooks().subscribe(//converting observable into data
      data => {
        this.allBooks = data;
        console.log(this.allBooks);
        this.allBooks = this.gotDataService.getSortData(this.allBooks);//sorting 
        console.log(this.allBooks);
      },
      error => {
        console.log("some error occurred");
        this.gotDataService.handleError(error);
      }
    )
    console.log(this.allBooks);
  }
}