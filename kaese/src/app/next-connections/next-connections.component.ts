import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-connections',
  templateUrl: './next-connections.component.html',
  styleUrls: ['./next-connections.component.css']
})
export class NextConnectionsComponent implements OnInit {

  public now: Date = new Date();
  public secondsTo: number;
  public minutesToStGallen: number;
  public minutesToZurich: number;
  private timeTableToStGallen = [4, 26, 34, 56];

  constructor() { 
    setInterval(() => {
      this.now = new Date();
      this.secondsTo = this.getSeconds();
      this.minutesToStGallen = this.getMinutes(56);
      this.minutesToZurich = this.getMinutes(26);
    }, 1);
  }

  ngOnInit() {
  }

  getMinutes(timeTo) {
    const minutesNow = this.now.getMinutes();
    return ((timeTo - minutesNow) < 0) ? 60 - minutesNow + timeTo: timeTo - minutesNow; 
  }

  getSeconds() {
    const secondsNow = this.now.getSeconds();
    return 60 - secondsNow == 60 ? 0 : 60 - secondsNow ;
  }
}
