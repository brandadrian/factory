import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get('http://brandadrian.internet-box.ch:9001/sudoku')
    //return "hello from common...";
  }

  getPythonServerStatus()
  {
    return this.http.get('http://brandadrian.synology.me:9000/status')
  }
}