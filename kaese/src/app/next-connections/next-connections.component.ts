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
  public nextToZurich: number;
  public nextToStGallen: number;
  private timeTableToStGallen = [4, 26, 34, 56];
  private timeTableToZurich = [4, 26, 34, 56];

  constructor() { 
    setInterval(() => {
      this.now = new Date();
      const minutesNow = this.now.getMinutes();
      this.secondsTo = this.getSeconds();
      this.nextToStGallen = this.getNextTime(minutesNow, this.timeTableToStGallen);
      this.nextToZurich = this.getNextTime(minutesNow, this.timeTableToZurich);
      this.minutesToStGallen = this.getMinutes(this.nextToStGallen);
      this.minutesToZurich = this.getMinutes(this.nextToZurich);
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

  getNextTime(minutesNow, timeTable)
  {

    for (let item in timeTable)
    {
      var nextItem = Number(item) + 1;
      if (timeTable[item] < minutesNow && timeTable[nextItem] > minutesNow)
      {
        return timeTable[nextItem];
      }
      
      return timeTable['0'];
    }
  }
}
