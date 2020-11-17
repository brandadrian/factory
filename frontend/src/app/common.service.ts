import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  private header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Basic YWRtaW46bGV0bWVpbg==`)
  }

  constructor(private http: HttpClient) { }

  getRunningEvents() {
    return this.http.get('http://brandadrian.internet-box.ch:9100/running-event');
  }

  getMessage() {
    return this.http.get('http://brandadrian.internet-box.ch:9001/sudoku');
    //return "hello from common...";
  }

  getPythonServerStatus()
  {
    return this.http.get('http://brandadrian.synology.me:9100/server-state');
  }

  getPythonServerHomeAutomationShellyRelay0(shellyNumber: number)
  {
    return this.http.get('http://brandadrian.synology.me:9100/home-automation/shelly/' + shellyNumber +'/relay/0', this.header);
  }

  getPythonServerHomeAutomationShellyLog()
  {
    return this.http.get('http://brandadrian.synology.me:9100/home-automation/shelly-log');
  }

  pressShellyButton(shellyNumber: number, pin: string)
  {
    let header =new HttpHeaders().set('Authorization',  `Basic YWRtaW46bGV0bWVpbg==`);
    return this.http.get('http://brandadrian.synology.me:9100/home-automation/shelly/' + shellyNumber +'/relay/0/button', this.header);
  }
}