import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get('http://brandadrian.internet-box.ch:9001/sudoku');
    //return "hello from common...";
  }

  getPythonServerStatus()
  {
    return this.http.get('http://brandadrian.synology.me:9100/server-state');
  }

  getPythonServerHomeAutomationState()
  {
    return this.http.get('http://brandadrian.synology.me:9100/home-automation');
  }

  getPythonServerHomeAutomationShellyState()
  {
    return this.http.get('http://brandadrian.synology.me:9100/home-automation/shelly');
  }
}