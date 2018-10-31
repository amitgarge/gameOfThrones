/* 'gotdata' HTTP service */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GotdataService {
  public baseUrl = "https://anapioficeandfire.com/api";

  public charactersArray;
  public housesArray;
  public booksArray;

  public allData;

  constructor(public httpclient: HttpClient) { }

  public handleError(err: HttpErrorResponse) {
    console.log("Handling the error in http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to get 50 characters
  public getAllCharacters(): any {
    let myResponse = this.httpclient.get(this.baseUrl + '/characters' + '?pageSize=50');
    console.log(myResponse);
    return myResponse;
  }

  //method to get 50 books
  public getAllBooks(): any {
    let myResponse = this.httpclient.get(this.baseUrl + '/books' + '?pageSize=50');
    console.log(myResponse);
    return myResponse;
  }

  //method to get 50 houses
  public getAllHouses(): any {
    let myResponse = this.httpclient.get(this.baseUrl + '/houses' + '?pageSize=50');
    console.log(myResponse);
    return myResponse;
  }

  //method to get single character information
  public getCharacterInformation(characterId): any {
    let myResponse = this.httpclient.get(this.baseUrl + '/characters/' + characterId);
    return myResponse;
  }

  //method to get single book information
  public getBookInformation(bookId): any {
    let myResponse = this.httpclient.get(this.baseUrl + '/books/' + bookId);
    return myResponse;
  }

  //method to get single house information
  public getHouseInformation(houseId): any {
    let myResponse = this.httpclient.get(this.baseUrl + '/houses/' + houseId);
    return myResponse;
  }

  //sorting the data
  public getSortData(rawData): any {
    rawData.sort(function (name1, name2) {
      if (name1.name < name2.name) {
        return -1;
      } else if (name1.name > name2.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return rawData;
  }
} // 'gotdata' HTTP service ends here