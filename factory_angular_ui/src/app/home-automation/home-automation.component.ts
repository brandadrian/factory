import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-home-automation',
  templateUrl: './home-automation.component.html',
  styleUrls: ['./home-automation.component.css']
})
export class HomeAutomationComponent implements OnInit {

  serverStatus: string;

  homeAutomationState: string;

  shellyState: string;

  shellyRelay0: string;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getPythonServerStatus()
    .subscribe((data: Object) => this.serverStatus = data['message']);

    this.commonService.getPythonServerHomeAutomationState()
    .subscribe((data: Object) => this.homeAutomationState = data['message']);

    this.commonService.getPythonServerHomeAutomationShellyState()
    .subscribe((data: Object) => this.shellyState = data['message']);

    this.commonService.getPythonServerHomeAutomationShellyRelay0()
    .subscribe((data: Object) => this.shellyRelay0 = data['message']);
  }

}
