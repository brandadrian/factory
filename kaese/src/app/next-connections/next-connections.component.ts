import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';

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

  constructor() { 
    setInterval(() => {
      this.now = new Date();
      this.secondsTo = this.getSeconds();
      this.minutesToStGallen = this.getMinutes(56);
      this.minutesToZurich = this.getMinutes(31);
    }, 1);
  }

  ngOnInit() {
  }

  getMinutes(timeTo) {
    return timeTo - this.now.getMinutes();
  }

  getSeconds() {
    return 60 - this.now.getSeconds() == 60 ? 0 : 60 - this.now.getSeconds() ;
  }
}
