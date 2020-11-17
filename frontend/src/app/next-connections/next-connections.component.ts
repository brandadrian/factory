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
  public minutesToAlgetshausen: number;
  public nextToAlgetshausen: number;
  public nextToStGallen: number;
  private timeTableToStGallen = [4, 26, 34, 56];
  private timeTableToAlgetshausen = [30];

  constructor() {
    setInterval(() => {
      this.now = new Date();
      const minutesNow = this.now.getMinutes();
      this.secondsTo = this.getSeconds();
      this.nextToStGallen = this.getNextTime(minutesNow, this.timeTableToStGallen);
      this.nextToAlgetshausen = this.getNextTime(minutesNow, this.timeTableToAlgetshausen);
      this.minutesToStGallen = this.getMinutes(this.nextToStGallen);
      this.minutesToAlgetshausen = this.getMinutes(this.nextToAlgetshausen);
    }, 1);
  }

  ngOnInit() {
  }

  getMinutes(timeTo) {
    const minutesNow = this.now.getMinutes();
    return ((timeTo - minutesNow) < 0) ? 60 - minutesNow + timeTo : timeTo - minutesNow;
  }

  getSeconds() {
    const secondsNow = this.now.getSeconds();
    return 60 - secondsNow === 60 ? 0 : 60 - secondsNow ;
  }

  getNextTime(minutesNow: number, timeTable: number[])
  {
    for (let i = 0; i < timeTable.length; i++){
      if (i < (timeTable.length - 1) && timeTable[i] < minutesNow && timeTable[i + 1] > minutesNow)
      {
        return timeTable[i + 1];
      }
    }

    return timeTable[0];
  }
}
