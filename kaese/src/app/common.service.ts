import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get('http://brandadrian.internet-box.ch:9001/sudoku')
    //return "hello from common...";
  }
}