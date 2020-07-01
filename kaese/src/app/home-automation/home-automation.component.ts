import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';

@Component({
  selector: 'app-home-automation',
  templateUrl: './home-automation.component.html',
  styleUrls: ['./home-automation.component.css']
})
export class HomeAutomationComponent implements OnInit {

  result: string;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getPythonServerStatus()
    .subscribe((data: Object) => this.result = data['status']);
  }

}
