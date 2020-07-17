import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-home-automation',
  templateUrl: './home-automation.component.html',
  styleUrls: ['./home-automation.component.css']
})
export class HomeAutomationComponent implements OnInit {

  now: Date = new Date();

  serverStatus: string;

  homeAutomationState: string;

  shellyState: string;

  shelly1Relay0: string;

  shelly2Relay0: string;

  doorOpenTimestamp: Date;

  doorClosedTimestamp: Date;

  doorState: string;

  constructor(private commonService: CommonService) { 
    setInterval(() => {
      let isDoorOpen = this.getDoorState();
      this.doorState = this.getDoorStateString(isDoorOpen);
    }, 1);
  }

  ngOnInit() {
    this.commonService.getPythonServerStatus()
    .subscribe((data: Object) => this.serverStatus = data['message']);

    this.commonService.getPythonServerHomeAutomationState()
    .subscribe((data: Object) => this.homeAutomationState = data['message']);

    this.commonService.getPythonServerHomeAutomationShellyState()
    .subscribe((data: Object) => this.shellyState = data['message']);

    this.commonService.getPythonServerHomeAutomationShellyRelay0(1)
    .subscribe((data: Object) => this.shelly1Relay0 = data['message']);

    this.commonService.getPythonServerHomeAutomationShellyRelay0(2)
    .subscribe((data: Object) => this.shelly2Relay0 = data['message']);
  }

  getDoorState()
  {
    return this.shelly2Relay0?.substr(8, 4) == "true";
  }

  getDoorStateString(doorstate: boolean)
  {
    return doorstate ? "Offen" : "Geschlossen";
  }
}
