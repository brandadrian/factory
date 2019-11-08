import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    //return "hello from common...";
  }
}
