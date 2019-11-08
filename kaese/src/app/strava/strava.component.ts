import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-strava',
  templateUrl: './strava.component.html',
  styleUrls: ['./strava.component.css']
})
export class StravaComponent implements OnInit {

  message: string;
  private counter: number;

  constructor(private commonService: CommonService) { 
    this.counter = 0;
  }

  ngOnInit() {
  }

  clickButton() {
    // this.commonService.getMessage()
    // .subscribe((data: Object) => {
    //     id: data['id']
    // });

    return "asd";
    //this.message = this.commonService.getMessage();//this.counter += 1;
  }
}