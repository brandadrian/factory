import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';
import { stringify } from '@angular/compiler/src/util';

interface DoorInformation {
  doorName: string;
  doorState: string;
  doorOpenAt?: Date;
  doorClosedAt?: Date;
}

@Component({
  selector: 'app-home-automation',
  templateUrl: './home-automation.component.html',
  styleUrls: ['./home-automation.component.css']
})
export class HomeAutomationComponent implements OnInit {
  public pin: string;
  public doorRight: DoorInformation;
  public serverStatus: string;
  public shelly1Relay0: string;
  public shelly2Relay0: string;
  public doorLog: string;

  constructor(private commonService: CommonService) {
    
    this.doorRight = {doorName: "Rechts", doorState: "", doorClosedAt:null, doorOpenAt:null};

    setInterval(() => {

      let log = this.doorLog.toString().split(',', 2);

      if (log[0].includes("SW-ON"))
      {
        this.doorRight.doorOpenAt = this.getDateFromLogString(log[0].split(';', 6)[0]);
        this.doorRight.doorState = "Offen";
      }

      if (log[0].includes("SW-OFF"))
      {
        this.doorRight.doorClosedAt = this.getDateFromLogString(log[0].split(';', 6)[0]);
        this.doorRight.doorState = "Geschlossen";
      }

      if (log[1].includes("SW-ON"))
      {
        this.doorRight.doorOpenAt = this.getDateFromLogString(log[1].split(';', 6)[0]);
      }

      if (log[1].includes("SW-OFF"))
      {
        this.doorRight.doorClosedAt = this.getDateFromLogString(log[1].split(';', 6)[0]);
      }

    }, 1000);
  }

  ngOnInit() {
    this.commonService.getPythonServerStatus()
    .subscribe((data: Object) => this.serverStatus = data['message']);

    this.commonService.getPythonServerHomeAutomationShellyRelay0(1)
    .subscribe((data: Object) => this.shelly1Relay0 = data['message']);

    this.commonService.getPythonServerHomeAutomationShellyRelay0(2)
    .subscribe((data: Object) => this.shelly2Relay0 = data['message']);

    this.commonService.getPythonServerHomeAutomationShellyLog()
    .subscribe((data: Object) => this.doorLog = data['message']);
  }

  //Konvertieren von geloggter Zeit zu konvertierbarer Zeit.
  //Zusätzlich werden zwei Stunden addiert, da Docker noch mit UTC arbeitet.
  getDateFromLogString(date: string)
  {
    let day = date.split('/')[0];
    let month = date.split('/')[1];
    let year = date.split('/')[2].split(' ')[0];
    let time = date.split(' ')[1];

    let dateNew = new Date(month + '/' + day + '/' + year + ' ' + time);
    return new Date(dateNew.getTime() + (1000 * 60 * 60 * 2));
  }

  getDoorState()
  {
    return this.shelly2Relay0?.substr(8, 4) == "true";
  }

  openDoor1() {
    if (this.pin == "9240")
    {
      return this.commonService.pressShellyButton(1, this.pin)
      .subscribe((data: Object) => {  window.location.reload();  });
    }
    else
    {
      alert("PIN falsch")
    }
  }
}
